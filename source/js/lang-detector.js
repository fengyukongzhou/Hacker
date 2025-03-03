/* 检测文本是否包含中文字符 */
function containsChinese(text) {
  return /[\u4e00-\u9fa5]/.test(text);
}

/* 检测文本是否只包含英文字符 */
function isEnglish(text) {
  return /^[a-zA-Z\s\p{P}]+$/u.test(text);
}

/* 为em元素添加适当的lang属性 */
function addLanguageAttributes() {
  document.querySelectorAll('.article-content em, .article-excerpt em').forEach(em => {
    const text = em.textContent.trim();
    
    // 如果已经有lang属性，不做改变
    if (em.hasAttribute('lang')) {
      return;
    }
    
    // 检测内容类型并设置相应的lang属性
    if (containsChinese(text)) {
      em.setAttribute('lang', 'zh');
    } else if (isEnglish(text)) {
      em.setAttribute('lang', 'en');
    }
    // 如果既不是纯中文也不是纯英文，保持默认状态
  });
}

/* 在页面加载完成后执行 */
document.addEventListener('DOMContentLoaded', addLanguageAttributes);

/* 如果内容是动态加载的，可以在需要时手动调用 */
window.addLanguageAttributes = addLanguageAttributes; 