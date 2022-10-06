<template>
  <div class="container">
    <div class="d-flex justify-content-between mb-3 mt-3">
      <h2>Todo List</h2>
      <div class="btn btn-primary" @click="moveToCreate">Create Todo</div>
    </div>

    <!-- 할일검색폼 -->
    <input
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <!-- 서버에러 출력 -->
    <ErrorBox :errtext="error" />
    <!-- 목록없음 안내 -->
    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <!-- 할일목록 -->
    <TodoList
      :todos="todos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
    <!-- Pagination -->
    <PaginationView :page="page" :totalpage="totalPage" @get-todo="getTodo" />
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import { computed, ref, watch, watchEffect } from "vue";
import TodoList from "@/components/TodoList.vue";
import PaginationView from "@/components/PaginationView.vue";
import ErrorBox from "@/components/ErrorBox.vue";
import { useRouter } from "vue-router";
import { useToast } from "@/composables/toast";
export default {
  components: {
    TodoList,
    PaginationView,
    ErrorBox,
  },
  emits: [],
  setup() {
    // toast 기능 관련
    const { triggerToast } = useToast();
    const todos = ref([]);

    // Pagination 구현
    // 전체목록수
    const totalCout = ref(0);
    // 페이지당 보여줄 개수
    const limit = 5;
    // 현재 페이지
    const page = ref(1);
    // 총 페이지수
    const totalPage = computed(() => {
      return Math.ceil(totalCout.value / limit);
    });

    const searchText = ref("");

    // ref, reactive, computed, props 등이 변경될때 마다 실행
    // watchEffect 를 사용합니다.
    watchEffect(() => {
      // console.log(page.value);
      // console.log(totalCout.value);
      // console.log(filterTodos.value);
      // console.log(totalPage.value);
    });

    // 변하기 전의 값 과 현재 값을 동시에 감시한다.
    // 연속으로 검색어를 무수하게 보내는 부분을 일정주기마다 감시한다.
    let timeout = null;

    watch(searchText, () => {
      // 검색 기능은 추후 보완할 예정
      // 타이머를 없앤다.
      clearTimeout(timeout);
      // 그리고 다시 타이머를 생성
      timeout = setTimeout(() => {
        getTodo(1);
      }, 500);
    });

    const filterTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });

    const getTodo = async (nowPage = page.value) => {
      try {
        const response = await axios.get(
          `todos?_page=${nowPage}&_limit=${limit}&subject_like=${searchText.value}&_order=desc&_sort=id`
        );
        todos.value = response.data;
        // 총 목록수
        totalCout.value = response.headers["x-total-count"];
        page.value = nowPage;
      } catch (err) {
        error.value = "서버 목록 호출에 실패했습니다. 잠시 뒤 이용해주세요.";
      }
    };

    getTodo();

    const error = ref("");

    const deleteTodo = async (index) => {
      try {
        // 현재 index 는 배열 인덱스 번호 0, 1,2,3,4, 가 전송된다.
        // 실제 저장되어 있는 id 를 파악한다.
        const id = index;
        await axios.delete("todos/" + id);
        // 목록이 삭제되면 현재페이지로 이동
        getTodo(page.value);
        // emit("delete-todo-toast", {});
        triggerToast("내용이 삭제되었습니다", "success");
      } catch (err) {
        error.value = "삭제 요청이 거부되었습니다.";
        // emit("delete-todo-fail-toast", {});
        triggerToast("삭제 요청이 거부되었습니다.", "danger");
      }
    };

    const toggleTodo = async (index) => {
      try {
        // 어느 데이터를 수정할 것인가를 전달
        // 업데이트 할 내용을 전달합니다.
        const id = todos.value[index].id;
        const complete = !todos.value[index].complete;
        await axios.patch("todos/" + id, {
          complete,
        });
        todos.value[index].complete = complete;
        // emit("update-todo-toast", {});
        triggerToast("내용이 업데이트 되었습니다.", "success");
      } catch (err) {
        error.value = "업데이트에 실패하였습니다.";
        // emit("update-todo-fail-toast", {});
        triggerToast("업데이트에 실패하였습니다.", "danger");
      }
    };

    const router = useRouter();
    const moveToCreate = () => {
      router.push({
        name: "Create",
      });
    };
    return {
      todos,
      deleteTodo,
      toggleTodo,
      searchText,
      filterTodos,
      error,
      totalPage,
      page,
      getTodo,
      moveToCreate,
    };
  },
};
</script>

<style>
.todostyle {
  text-decoration: line-through;
  color: gray;
}
</style>
