document.addEventListener('DOMContentLoaded', function() {
  // 获取所有脚注引用链接
  const footnoteRefs = document.querySelectorAll('.footnote-ref');
  
  // 创建弹出层元素
  const popupEl = document.createElement('div');
  popupEl.className = 'footnote-popup';
  popupEl.style.display = 'none';
  popupEl.style.opacity = '0';
  document.body.appendChild(popupEl);
  
  // 为每个脚注引用添加事件监听器
  footnoteRefs.forEach(ref => {
    // 鼠标悬停事件
    ref.addEventListener('mouseenter', function(e) {
      // 获取对应脚注的ID
      const footnoteId = this.getAttribute('href').substring(1);
      const footnote = document.getElementById(footnoteId);
      
      if (footnote) {
        // 获取脚注内容（移除回链部分）
        const footnoteContent = footnote.cloneNode(true);
        const backRef = footnoteContent.querySelector('.footnote-backref');
        if (backRef) {
          backRef.remove();
        }
        
        // 设置弹出层内容和位置
        popupEl.innerHTML = footnoteContent.innerHTML;
        
        // 计算位置
        const refRect = this.getBoundingClientRect();
        const popupWidth = 300; // 弹出层宽度
        
        // 计算左侧位置，确保不超出视口
        let left = refRect.left;
        if (left + popupWidth > window.innerWidth) {
          left = window.innerWidth - popupWidth - 20;
        }
        
        // 设置初始位置
        popupEl.style.left = `${left}px`;
        popupEl.style.top = `${refRect.bottom + window.scrollY + 5}px`;
        
        // 显示弹出层并添加动画效果
        popupEl.style.display = 'block';
        
        // 使用requestAnimationFrame确保DOM更新后再添加过渡效果
        requestAnimationFrame(() => {
          popupEl.style.opacity = '1';
          
          // 添加小箭头指向引用
          const arrow = document.createElement('div');
          arrow.className = 'footnote-popup-arrow';
          arrow.style.position = 'absolute';
          arrow.style.top = '-8px';
          arrow.style.left = `${Math.min(refRect.left - left + refRect.width/2, popupWidth - 20)}px`;
          arrow.style.width = '0';
          arrow.style.height = '0';
          arrow.style.borderLeft = '8px solid transparent';
          arrow.style.borderRight = '8px solid transparent';
          arrow.style.borderBottom = '8px solid #ddd';
          popupEl.insertBefore(arrow, popupEl.firstChild);
          
          // 添加内部箭头，形成双层箭头效果
          const innerArrow = document.createElement('div');
          innerArrow.className = 'footnote-popup-inner-arrow';
          innerArrow.style.position = 'absolute';
          innerArrow.style.top = '-7px';
          innerArrow.style.left = `${Math.min(refRect.left - left + refRect.width/2, popupWidth - 20)}px`;
          innerArrow.style.width = '0';
          innerArrow.style.height = '0';
          innerArrow.style.borderLeft = '8px solid transparent';
          innerArrow.style.borderRight = '8px solid transparent';
          innerArrow.style.borderBottom = '8px solid var(--card-bg)';
          popupEl.insertBefore(innerArrow, popupEl.firstChild);
        });
      }
    });
    
    // 鼠标离开事件
    ref.addEventListener('mouseleave', function() {
      // 添加延迟，以便用户可以将鼠标移动到弹出层上
      setTimeout(() => {
        if (!popupEl.matches(':hover')) {
          fadeOutPopup();
        }
      }, 300);
    });
  });
  
  // 当鼠标离开弹出层时隐藏它
  popupEl.addEventListener('mouseleave', function() {
    fadeOutPopup();
  });
  
  // 点击页面其他区域时隐藏弹出层
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.footnote-ref') && !e.target.closest('.footnote-popup')) {
      fadeOutPopup();
    }
  });
  
  // 淡出弹出层的函数
  function fadeOutPopup() {
    popupEl.style.opacity = '0';
    setTimeout(() => {
      popupEl.style.display = 'none';
      // 移除箭头元素
      const arrow = popupEl.querySelector('.footnote-popup-arrow');
      const innerArrow = popupEl.querySelector('.footnote-popup-inner-arrow');
      if (arrow) {
        arrow.remove();
      }
      if (innerArrow) {
        innerArrow.remove();
      }
    }, 300);
  }
  
  // 移除文章底部脚注区域的多余分割线
  const footnotes = document.querySelector('.footnotes');
  if (footnotes) {
    const hrs = footnotes.querySelectorAll('hr');
    hrs.forEach(hr => hr.remove());
  }
}); 