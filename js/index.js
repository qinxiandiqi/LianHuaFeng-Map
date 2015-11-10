<script src="jQuery-2.1.4.js"></script>
function tips(){

}
$(document).ready(function() {
    $("#index_map").onload(function() {
        var maxWidth = $(screen).availWidth; // 图片最大宽度
        var maxHeight = $(screen).availHeight;    // 图片最大高度
        var ratio = 0;  // 缩放比例
        var width = $(this).width();    // 图片实际宽度
        var height = $(this).height();  // 图片实际高度

        // 检查图片是否超宽
        if(width > maxWidth){
            ratio = maxWidth / width;   // 计算缩放比例
            $(this).css("width", maxWidth); // 设定实际显示宽度
            height = height * ratio;    // 计算等比例缩放后的高度
            $(this).css("height", height);  // 设定等比例缩放后的高度
        }

        // 检查图片是否超高
        if(height > maxHeight){
            ratio = maxHeight / height; // 计算缩放比例
            $(this).css("height", maxHeight);   // 设定实际显示高度
            width = width * ratio;    // 计算等比例缩放后的高度
            $(this).css("width", width * ratio);    // 设定等比例缩放后的高度
        }
        alert("update iamge")
    });
});
