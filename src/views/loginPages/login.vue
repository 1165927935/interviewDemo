<template>
  <div>
    <el-form :model="form" ref="accountForm" label-width="auto" style="max-width: 600px;margin: auto;" :rules="rules">
      <el-form-item :label="$t('账号')" prop="account">
        <el-input v-model="form.account" :placeholder="$t('请输入')" />
      </el-form-item>
      <el-form-item :label="$t('密码')" prop="password">
        <el-input v-model="form.password" :placeholder="$t('请输入')" type="password"  />
      </el-form-item>
      <el-form-item :label="$t('语言')" prop="locale">
        <el-select
          @change="toggleLang"
          v-model="form.locale"
          :placeholder="$t('请选择')" 
          size="large"
          style="width: 240px"
        >
          <el-option :key="'zh-Cn'" :label="$t('中文')" :value="'zh-Cn'" />
          <el-option :key="'en'" :label="$t('英文')" :value="'en'" />
          <el-option :key="'fr'" :label="$t('法语')" :value="'fr'" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">{{$t('登录')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scope setup>
import { reactive, computed,getCurrentInstance,ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
const { proxy } = getCurrentInstance();
const store = useStore();
const {t }= useI18n();
// do not use same name with ref
const form = reactive({
  account: "",
  password: "",
  locale: ""
});
form.locale = store.state.language
const rules = reactive({
  account: [
    { required: true, message: t('请输入'), trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: t('请输入'),
      trigger: 'blur',
    },
  ],
  locale: [
    {
      required: true,
      message: t('请选择'),
      trigger: 'change',
    },
  ]
})
const toggleLang = value => {
  store.state.language = value;
  localStorage.setItem("language", value);
  proxy.$i18n.locale = value;
};
const submitForm = () => {
  proxy.$refs.accountForm.validate((valid) => {
    if (valid) {
     if(form.account == 'liubingwen' && form.password == 'Liu1165'){
      proxy.$router.push('/homePage')
     }
    } 
  })
}
</script>
