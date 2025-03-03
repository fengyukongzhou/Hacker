document.addEventListener('DOMContentLoaded', function() {
  // 获取所有脚注引用链接
  const footnoteRefs = document.querySelectorAll('.footnote-ref');
  
  // 创建弹出层元素
  const popupEl = document.createElement('div');
  popupEl.className = 'footnote-popup';
  document.body.appendChild(popupEl);
  
  let activeRef = null;
  let isPopupVisible = false;
  
  // 智能定位函数
  function positionPopup(ref, popup) {
    const refRect = ref.getBoundingClientRect();
    const popupWidth = 360; // 与CSS中定义的宽度相同
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // 计算水平位置
    let left = refRect.left - (popupWidth - refRect.width) / 2;
    // 确保不超出左边界
    left = Math.max(20, left);
    // 确保不超出右边界
    left = Math.min(left, viewportWidth - popupWidth - 20);
    
    // 计算垂直位置
    const spaceBelow = viewportHeight - refRect.bottom;
    const spaceAbove = refRect.top;
    const popupHeight = Math.min(300, popup.scrollHeight); // 最大高度300px
    
    let top;
    
    if (spaceBelow >= popupHeight + 20 || spaceBelow >= spaceAbove) {
      // 在下方显示
      top = Math.min(refRect.bottom + 10, viewportHeight - popupHeight - 20);
    } else {
      // 在上方显示
      top = Math.max(20, refRect.top - popupHeight - 10);
    }
    
    return { left, top };
  }
  
  // 显示弹出层
  function showPopup(ref) {
    if (activeRef === ref) {
      hidePopup();
      return;
    }
    
    const footnoteId = ref.getAttribute('href').substring(1);
    const footnote = document.getElementById(footnoteId);
    
    if (footnote) {
      // 移除之前的激活状态
      if (activeRef) {
        activeRef.classList.remove('active');
      }
      
      // 设置新的激活引用
      activeRef = ref;
      ref.classList.add('active');
      
      const footnoteContent = footnote.cloneNode(true);
      const backRef = footnoteContent.querySelector('.footnote-backref');
      if (backRef) {
        backRef.remove();
      }
      
      popupEl.innerHTML = footnoteContent.innerHTML;
      popupEl.style.display = 'block';
      
      // 计算位置
      const { left, top } = positionPopup(ref, popupEl);
      popupEl.style.left = `${left}px`;
      popupEl.style.top = `${top}px`;
      
      // 触发重排后添加过渡效果
      requestAnimationFrame(() => {
        popupEl.classList.add('active');
      });
      
      isPopupVisible = true;
    }
  }
  
  // 隐藏弹出层
  function hidePopup() {
    if (isPopupVisible) {
      popupEl.classList.remove('active');
      
      if (activeRef) {
        activeRef.classList.remove('active');
        activeRef = null;
      }
      
      setTimeout(() => {
        popupEl.style.display = 'none';
        isPopupVisible = false;
      }, 200);
    }
  }
  
  // 为每个脚注引用添加事件监听器
  footnoteRefs.forEach(ref => {
    ref.addEventListener('click', (e) => {
      e.preventDefault();
      showPopup(ref);
    });
  });
  
  // 点击页面其他区域时隐藏弹出层
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.footnote-ref') && !e.target.closest('.footnote-popup')) {
      hidePopup();
    }
  });
  
  // 监听滚动事件，重新定位弹出层
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (isPopupVisible && activeRef) {
      clearTimeout(scrollTimeout);
      popupEl.style.transition = 'none';
      
      scrollTimeout = setTimeout(() => {
        popupEl.style.transition = '';
        const { left, top } = positionPopup(activeRef, popupEl);
        popupEl.style.left = `${left}px`;
        popupEl.style.top = `${top}px`;
      }, 100);
    }
  }, { passive: true });
  
  // 监听窗口大小变化，重新定位弹出层
  let resizeTimeout;
  window.addEventListener('resize', () => {
    if (isPopupVisible && activeRef) {
      clearTimeout(resizeTimeout);
      popupEl.style.transition = 'none';
      
      resizeTimeout = setTimeout(() => {
        popupEl.style.transition = '';
        const { left, top } = positionPopup(activeRef, popupEl);
        popupEl.style.left = `${left}px`;
        popupEl.style.top = `${top}px`;
      }, 100);
    }
  }, { passive: true });
  
  // 添加键盘支持
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPopupVisible) {
      hidePopup();
    }
  });
  
  // 移除文章底部脚注区域的多余分割线
  const footnotes = document.querySelector('.footnotes');
  if (footnotes) {
    const hrs = footnotes.querySelectorAll('hr');
    hrs.forEach(hr => hr.remove());
  }
}); 