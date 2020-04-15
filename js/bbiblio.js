/* scripts BBiblio*/

(function commander ()
{
    $("input[name='commander']").click(function()
        {
            window.open("http://amazon.com")
        }
    )
}());

(function soumettre ()
{
    $("#soumettreOeuvre").click(function()
        {
            window.location.href= "soumissionOeuvre.html"
        }
    )
}());



(function login () 
{ 
    $("#ok").click(function()
    {      
        var premiermdp =$("#mdp").val()
        connexion(premiermdp)
    });
}())


function connexion (mdp)
{
    if((mdp=="jury007") || (mdp=="auteurediteur007"))
    {
        window.location.href= "html/modifMdp.html"
    }
    else
    {
        if(mdp=="superecf")
        {
            window.location.href= "html/admin.html"
        }
    alert("Votre mot de passe est incorrect.")
    }
};


(function modifMDP()
{
    $("#valider").click(function()
    {   
        var mdp0=$("#oldMdp").val();
        var mdp1=$("#mdp").val();
        var mdp2=$("#mdpbis").val();
        verifMDP(mdp0,mdp1,mdp2)
    })
}());

function verifMDP(mdp0,mdp1,mdp2)
{
var regex=/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/
var regexnumber=/^\D+$/
var regexmin=/^(?=.*[a-z]).*$/
var regexmaj=/^(?=.*[A-Z]).*$/
    
if(regex.test(mdp1) && (mdp1==mdp2) )
    {
        alert("Votre nouveau mot de passe est enregistré")
            if(mdp0.startsWith("jury"))
            {
                window.location.href= "profilJury.html"
            }
            else
            {
                window.location.href= "profilAuteur.html"
            }
        
    }
    else
    {
        if (mdp1!==mdp2)
        {
            alert("Les mots de passes ne sont pas identiques")
        }
        else
        {
            if(mdp1.length<10)
            {
                alert("Votre mot de passe doit contenir 10 caractères minimum")
            } 
            else 
            {
                if(regexnumber.test(mdp1))
                {
                    alert("Votre mot de passe doit contenir au moins 1 chiffre")
                }
                else
                {
                    if(regexmin.test(mdp1))
                    {
                        alert("Votre mot de passe doit contenir au moins 1 majuscule")
                    }
                    else
                    {
                        if(regexmaj.test(mdp1))
                        {
                            alert("Votre mot de passe doit contenir au moins 1 minuscule")
                        }
                    }
                }
            }
        }
          
    }
    
};

(function choixCategorie()
{
    $("#confirmerCat").click(function()
    {
        if(confirm("Une fois confirmé vous ne pourrez plus modifier vos choix."))
        {
            $("#confirmerCat").hide();
            $("input[name='cat']").prop("disabled",true)
            $("#categories span").text("Catégories choisies")
        }
        else
        {
        }
    })
}());


(function newmdp()
{
    $("#mdpoublie").click(function()
    {
        prompt("Entrez votre mail pour recevoir un mot de passe provisoire")
    })
}());

(function statut()
{
    $("[name='statut']").click(function()
    {
        if($("#jury").is(":checked"))
        {
            $("#raisonSociale").prop("disabled",true);
        }
        else
        {
            $("#raisonSociale").prop("disabled",false);
            $("#raisonSociale").attr("required",true);
        }
    })

}());

(function reglementLu()
{
    $("#caseValidation").click(function()
    {
        if($(this).prop("checked") == true)
        {
            $("#validerInsc").prop("disabled",false)
        }
        else
        {
            $("#validerInsc").prop("disabled",true)
        }
    })
    $("form").on("submit", function() {
        alert("Votre demande a bien été prise en compte. Vous recevrez un mail très bientôt.") 
        
    })
}());

(function creationNews()
{
    $("#creerNews, #modifNews").click(function() // le menu des sélections de news se remplit à chaque news publiée
    {
        window.location.href="creationNews.html"
    })
}());

(function contactAuteur()
{
    $("#envoiMail").click(function()
    {
        window.location.href="mailto:me@example.com" // on récupère automatiquement le mail du candidat dans la BDD
    })
}());

(function apercuNews()
{
    $("#apercuNews").click(function()
    {
        window.location.href="titreNews.html"  
    })
}())

// menu du choix de la date et traduction en fr
$( function() 
	{
		$( "#dateParution" ).datepicker(
			{
			dateFormat: "yy-mm-dd",
			maxDate: 0,
			minDate: new Date('2019-12-01')
			});
	});

$.datepicker.regional['fr'] = 
{
	closeText: 'Fermer', 
	prevText: 'Précédent', 
	nextText: 'Suivant', 
	currentText: 'Aujourd\'hui', 
	monthNames: ['Janvier', 'Février', 'Mars', 
	'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 
	'Septembre', 'Octobre', 'Novembre', 'Décembre'], 
	monthNamesShort: ['Janv.', 'Févr.', 'Mars', 
	'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 
	'Oct.', 'Nov.', 'Déc.'], 
	dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 
	'Jeudi', 'Vendredi', 'Samedi'], 
	dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 
	'Jeu.', 'Ven.', 'Sam.'], 
	dayNamesMin: ['D','L','M','M','J','V','S'], 
	weekHeader: 'Sem.', 
	dateFormat: 'dd/mm/yy', 
	firstDay: 1, 
	isRTL: false, 
	showMonthAfterYear: false, 
	yearSuffix: ''
}; 
	$.datepicker.setDefaults($.datepicker.regional['fr']);

    jQuery(document).ready(function($){ $("#datepicker").datepicker(); });


