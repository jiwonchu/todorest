<template>
  <div>
    <a v-if="!loginState" id="custom-login-btn" @click="kakaoLogin()">
      Kakao 로그인
    </a>
    <div v-else>
      {{ email }}
      {{ profile }}
      {{ loginState }}
      <button type="button" @click="kakaoLogout">Kakao 로그아웃</button>
    </div>
    <a href="https://accounts.kakao.com/weblogin/account/info" target="_blank"
      >Kakao 정보삭제</a
    >
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const kakaoLogin = () => {
      window.Kakao.Auth.login({
        scope: "profile_nickname, profile_image, account_email",
        success: getKakaoAccount,
      });
    };
    const getKakaoAccount = () => {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          // const nickname = kakao_account.profile.nickname; //카카오 닉네임
          const email = kakao_account.email; //카카오 이메일
          // console.log("nickname", nickname);
          // console.log("email", email);
          //로그인 처리 구현
          // console.log(kakao_account.profile);
          alert("로그인 성공!");
          const profile = kakao_account.profile;
          store.dispatch("kakao/loginKKO", { email, profile });
          router.push({
            name: "Todos",
          });
        },
        fail: (error) => {
          console.log(error);
          alert("로그인 실패!");
        },
      });
    };
    const kakaoLogout = () => {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        // console.log("access token:", window.Kakao.Auth.getAccessToken());
        console.log("log out:", response);
        alert("로그아웃 성공!");
        store.dispatch("kakao/logOutKKO");
        router.push({
          name: "Home",
        });
      });
    };
    const email = computed(() => store.getters["kakao/getEmail"]);
    const profile = computed(() => store.getters["kakao/getProfile"]);
    const loginState = computed(() => store.getters["kakao/getLoginState"]);

    return {
      kakaoLogout,
      kakaoLogin,
      email,
      profile,
      loginState,
    };
  },
};
</script>

<style></style>
