(function appelHeader ()
{
    $.ajax(
        {
            url: "../html/headerProfilJury.html", 
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