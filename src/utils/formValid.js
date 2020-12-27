
import { validAccount, validPwd } from './validate'

/**
 * @param {string} rule 表单验证规则
 * @param {string} value 表单input value值
 * @param {string} callback 
 */

export function validAccountName(rule, value, callback) {
   if (!value) {
      callback(new Error("用户名不能为空"));
   } else if (validAccount(value) == false) {
      callback(
         new Error("请输入4到16位（字母，数字，下划线，减号）组合的用户名")
      );
   } else {
      callback();
   }
};

export function validPass(rule, value, callback, data, refs) {
   console.log(rule, value, callback, data, refs)
   if (value === "") {
      callback(new Error("请输入密码"));
   } else if (validPwd(value) == false) {
      callback(new Error("请输入数字、大写字母、小写字母组成的6位密码"));
   } else {
      if (this.ruleForm.checkPass !== "" && validPwd(value)) {
         this.$refs.ruleForm.validateField("checkPass");
      }
      callback();
   }
};

export function twiceValidPass(rule, value, callback, data, refs) {
   if (value === "") {
      callback(new Error("请再次输入密码"));
   } else if (validPwd(value) == false) {
      callback(new Error("请输入数字、大写字母、小写字母组成的6位密码"));
   } else if (value !== this.ruleForm.pass) {
      callback(new Error("两次输入密码不一致!"));
   } else {
      callback();
   }
};