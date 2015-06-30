
        function change(val, obj) {
            var list = document.getElementsByClassName("tag")
            
            for (var i = 0; i < list.length; i++)
            {
                if (list[i] != obj) {
                    list[i].style.background = "#F6F6F6";
                   
                } else {
                    list[i].style.background = "white";
                    
                }
            }
            
            if (val == 'details') {
                detail.style.display = 'block';
                review.style.display = 'none';                
               

            } else if (val == 'reviews') {
                detail.style.display = 'none';
                review.style.display = 'block';

            }
        }
function change2(imgPath, obj) {
    pig.src = imgPath;
    obj.style.border = "1px solid";
    var list = document.getElementsByClassName("tag1")

    for (var i = 0; i < list.length; i++) {
        if (list[i] != obj) {
            list[i].style.border = "solid #F6F6F6";

        } else {
            list[i].style.border = "1px solid";

        }
    }

}







        
      