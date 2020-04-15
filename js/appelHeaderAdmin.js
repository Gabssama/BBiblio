(function appelHeader ()
{
    $.ajax(
        {
            url: "../html/headerAdmin.html", 
            success: function(result)
            {
                $("header").html(result);
                (function deconnecter ()
                {
                     $("#deconnecter").click(function()
                        {
                        window.location.href="../index.html"
                        })
                }());
               
            }
        });
}());  

(function appelFooter ()
{
    $.ajax(
        {
            url: "../html/footer.html", 
            success: function(result)
            {
                $("footer").html(result);
                
            }
        });
}());

// aperçu de l'image en une avant publication de la news

$(function () {
    $("#imageUne").change(function () {
        if (typeof (FileReader) != "undefined") {
            var apercu = $("#apercu");
            apercu.html("");
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png)$/;
            $($(this)[0].files).each(function () {
                var file = $(this);
                if (regex.test(file[0].name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var img = $("<img />");
                        img.attr("style", "height:150px;width: 300px");
                        img.attr("src", e.target.result);
                        apercu.append(img);
                    }
                    reader.readAsDataURL(file[0]);
                } else {
                    alert(file[0].name + " is not a valid image file.");
                    apercu.html("");
                    return false;
                }
            });
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    });
});

