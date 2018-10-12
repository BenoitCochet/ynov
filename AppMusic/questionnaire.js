

function questionsuivante(rep,num, listechoix){
	document.getElementById("choix"+num).style.display="none";
	var liste = listechoix + ", " + rep;
	if(num==1){
		displayQ2(rep);
	}else if(num==2){
		displayQ3(liste);
	}else if(num==3){
		displayQ4(liste);
	}else if(num==4){
		displayQ5(liste);
	}else if(num==5){
		displayRes(liste);
	}


}

function displayQ2(choixprec){
	var str = "<div id='choix2' style='display:block;'> "
			+"<h2 style='text-align: center'>Quelle genre ?</h2>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='rap' onclick='questionsuivante(\"rap\",2,\""+choixprec+"\")'>Rap</button></br>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='tech'>Techno</button></br>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='rock'>Rock</button>"
			+	"	        </div>";
	$("#questions").append(str);
}

function displayQ3(choixprec){
	var str = "<div id='choix3' style='display:block;'> "
			+"<h2 style='text-align: center'>Quelle langue ?</h2>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='fra' onclick='questionsuivante(\"francais\",3,\""+choixprec+"\")'>Français</button></br>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='amer'>Américain</button></br>"
			+	"		      <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='all'>Allemand</button></br>"
			+	"	        </div>";
	$("#questions").append(str);
}

function displayQ4(choixprec){
	var str = "<div id='choix4' style='display:block;'> "
			+"<h2 style='text-align: center'>Quelle type ?</h2>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='consc' onclick='questionsuivante(\"cons\",4,\""+choixprec+"\")'>Conscient</button></br>"
			+	"	          <button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='distr' onclick='questionsuivante(\"dist\",4,\""+choixprec+"\")'>Distrayant</button></br>"
			+	"	        </div>";
	$("#questions").append(str);
}

function displayQ5(choixprec){
	var str = "<div id='choix5' style='display:block;'> "
				+"<h2 style='text-align: center'>Quelle courant ?</h2>"
				+"<button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='old' onclick='questionsuivante(\"old\",5,\""+choixprec+"\")'>Old School</button></br>"
		        +"<button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='trap' onclick='questionsuivante(\"trap\",5,\""+choixprec+"\")'>Trap</button></br>"
		        +"<button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='cloud' onclick='questionsuivante(\"cloud\",5,\""+choixprec+"\")'>Cloud</button></br>"
		        +"<button type='button' style='background-color:white;color:#5e42a6 !important;margin-bottom:15px;width:"+$(window).width()+"px' id='alter' onclick='questionsuivante(\"alter\",5,\""+choixprec+"\")'>Alternatif</button>"
			+	"	        </div>";
	$("#questions").append(str);
}

function displayRes(liste){
	var json = '{"genre": {'
	+'"sombre":{'
	+'    "rap": {'
	+'    	"francais": {'
	+'		    "cons": {'
	+'		    	"old": ['
	+'			      {"artiste": "Hugo TSR", "album": "Fenêtre Sur Rue", "lien":"https://open.spotify.com/embed/album/5Gw8aMh4G24wlXhFSQtgfk"}'
	+'			    ],'
	+'			    "trap": ['
	+'			      {"artiste": "Aladin 135", "album": "Indigo", "lien":"https://open.spotify.com/embed/album/6Q358diFkxeJVLNv7LK7S8"}'
	+'			    ],'
	+'			    "cloud": ['
	+'			      {"artiste": "PNL", "album": "Que La Famille","lien":"https://open.spotify.com/embed/album/2LOyzVRA6BJgfgGxQj21O1"}'
	+'			    ],'
	+'			    "alter": ['
	+'			      {"artiste": "Jazzy Bazz", "album": "Nuit","lien":"https://open.spotify.com/embed/album/0iWIenOrbx9qzTKRWCiroj"}'
	+'			    ]'
	+'		    },'
	+'		    "dist": {'
	+'		    	"old": ['
	+'			      {"artiste": "Orelsan", "album": "Perdu d\'avance", "lien":"https://open.spotify.com/embed/album/17UiqpQyl8T8vVxz2Towjy"}'
	+'			    ],'
	+'			    "trap": ['
	+'			      {"artiste": "Alpha Wann", "album": "Une Main Lave l\'Autre", "lien":"https://open.spotify.com/embed/album/7KNQIQwGaW7FnFsa7I3Kl7"}'
	+'			    ],'
	+'			    "alter": ['
	+'			      {"artiste": "Di-Meh", "album": "Focus Vol. 2", "lien":"https://open.spotify.com/embed/album/3AP4mqThB2IAmu20juRAPq"}'
	+'			    ]'
	+'		    }'	
	+'		}'
    +'	}'
    +'}'
   	+'}}';

   	var c1 = liste.split(", ")[0];
   	var c2 = liste.split(", ")[1];
   	var c3 = liste.split(", ")[2];
   	var c4 = liste.split(", ")[3];
   	var c5 = liste.split(", ")[4];

   	var jsonparse = JSON.parse(json);
   	var res = jsonparse["genre"][c1][c2][c3][c4][c5];
   	var height = $(window).height()-$("#intro").height();
   	
		var str = "<div id='choix5' style='display:block;'> "
			+"<iframe src='"+res[0].lien+"'  width='"+$(window).width()+"' height='"+height+"' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
			+	"	        </div>";
		$("#questions").append(str);
		$("#intro").html("<h1 style='margin-bottom:-5%;text-align:center;'>" + res[0].artiste + "</h1></br><p style='text-align:center;margin-bottom: 2%;'>" 
			+ res[0].album + "</p><button style='width:"+$(window).width()+"px;margin-bottom: 10px;background-color:white;color:#5e42a6 !important' onclick='recherche()'>Nouvelle recherche</button>");


}


