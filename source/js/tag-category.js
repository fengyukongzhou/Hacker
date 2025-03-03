// 处理标签云和分类导航的样式
document.addEventListener('DOMContentLoaded', function() {
  // 处理标签云项的透明度
  const tagCloudItems = document.querySelectorAll('.tag-cloud-item');
  
  tagCloudItems.forEach(item => {
    const opacity = item.getAttribute('data-opacity');
    
    if (opacity) {
      item.style.opacity = opacity;
    }
  });
});