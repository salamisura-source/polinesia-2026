╔══════════════════════════════════════════════════════════════════╗
║  🌺  POLINESIA 2026 · PACCHETTO DAILY BRIEF                     ║
║  Guida installazione su GitHub Pages + Android                   ║
╚══════════════════════════════════════════════════════════════════╝

📦 COSA C'È IN QUESTO PACCHETTO
────────────────────────────────
  index.html                        → Hub / dashboard principale
  report_polinesia_mobile.html      → Versione mobile (PWA installabile)
  report_polinesia_quotidiano.html  → Daily brief desktop completo
  report_polinesia_agosto_2026.html → Sinottica settimanale
  guida_check_traghetti.html        → Guida ferry Aremiti
  manifest.json                     → Manifest PWA (per icona app)
  sw.js                             → Service worker (offline)
  viaggio_polinesia.ics             → Calendario con 18 eventi
  infografica_meteo.png             → Infografica meteo agosto
  infografica_sanita.png            → Rete sanitaria Society
  infografica_epidemia.png          → Bollettino sanitario luglio
  screenshot_aremiti_agosto.png     → Screenshot orari Aremiti


═══════════════════════════════════════════════════════════════════
  🚀 INSTALLAZIONE SU GITHUB PAGES (10 minuti · una volta sola)
═══════════════════════════════════════════════════════════════════

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 · CREA ACCOUNT GITHUB (se non ce l'hai)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Vai su → https://github.com/signup
  2. Inserisci email, password, scegli username (es: mario-rossi)
  3. Verifica email
  4. Al primo login puoi saltare tutte le domande sui piani a pagamento
     → clicca "Skip personalization" o "Continue for free"

  💡 Il tuo USERNAME diventerà parte dell'URL finale:
     Se scegli "mario-rossi", il sito sarà su:
     https://mario-rossi.github.io/polinesia-2026/


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 · CREA UN NUOVO REPOSITORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. In alto a destra, clicca il "+" → "New repository"
     (link diretto: https://github.com/new)

  2. Compila:
     • Repository name:  polinesia-2026
     • Description:      Daily Brief viaggio Polinesia Francese
     • Public            ✓  (obbligatorio per GitHub Pages gratuito)
     • Add a README      ✓  (spunta per creare il repo popolato)
     • .gitignore:       None
     • License:          None

  3. Clicca "Create repository"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 · CARICA TUTTI I FILE DEL PACCHETTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Nella pagina del repository appena creato, clicca:
     "Add file" → "Upload files"

  2. Nella pagina che si apre:
     • Apri sul tuo PC la cartella scompattata di questo ZIP
     • Seleziona TUTTI i file (Ctrl+A o Cmd+A)
     • Trascinali nel riquadro tratteggiato "Drag files here to add them"
     • ⚠️  Devi caricare i file DIRETTAMENTE (non una cartella dentro)

  3. Scendi in basso alla pagina, sotto "Commit changes":
     • Lascia il messaggio predefinito (o scrivi "Prima versione")
     • Clicca "Commit changes"

  4. Aspetta 10-20 secondi che GitHub processi l'upload


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 · ATTIVA GITHUB PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Nel repository, clicca la tab "Settings" (in alto a destra,
     accanto a "Security", "Insights")

  2. Nel menu di sinistra, scorri fino a "Pages" (sotto "Code and
     automation") e clicca

  3. Nella sezione "Build and deployment":
     • Source:    Deploy from a branch
     • Branch:    main  (o "master")  ·  /  (root)
     • Clicca "Save"

  4. Dopo 1-3 minuti, in cima alla pagina appare:
     "✓ Your site is live at https://tuonome.github.io/polinesia-2026/"

  🎉 IL SITO È ONLINE!


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 · APRI SU ANDROID E INSTALLA L'APP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Sul tuo Android, apri Chrome (versione recente)

  2. Vai all'URL:
     https://TUONOME.github.io/polinesia-2026/

  3. Si apre l'hub 🌺 Polinesia 2026 con:
     • Countdown live
     • Convertitore XPF
     • Meteo delle 3 isole (aggiornato in tempo reale)

  4. Aspetta 3-5 secondi. Compare in basso il banner blu:
     "📱 Installa la app · Icona sulla home + offline"
     → Clicca "Installa"

  5. Chrome ti chiede conferma:
     "Installare Polinesia 26?"
     → Clicca "Installa"

  6. Vai sulla home del tuo Android:
     → L'icona 🌺 PF è comparsa insieme alle altre app!

  7. Toccando l'icona si apre a schermo intero (senza barra Chrome),
     come una vera app nativa.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6 · IMPORTA IL CALENDARIO .ics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Sull'Android, dall'app installata o da Chrome:
     apri l'hub → tocca la card "📅 Calendario .ics"

  2. Il file viaggio_polinesia.ics si scarica

  3. Toccando il download, Android chiede con quale app aprirlo:
     scegli Google Calendar (o quello che usi)

  4. Ti chiede "Aggiungere 18 eventi al calendario?"
     → Sì

  5. Fatto! Trovi tutti i voli, hotel, ferry nel calendario, con
     reminder automatici (2h prima di ogni volo, 1 giorno prima
     delle azioni critiche come ESTA)


═══════════════════════════════════════════════════════════════════
  🔧 SE VUOI AGGIORNARE UN FILE IN FUTURO
═══════════════════════════════════════════════════════════════════

  1. Vai sul tuo repo GitHub
  2. Clicca sul file da modificare
  3. Clicca l'icona matita ✏️ in alto a destra
  4. Modifica e in basso clicca "Commit changes"
  5. Dopo 1-2 minuti, il sito si aggiorna automaticamente
     (l'app installata prende l'aggiornamento la prossima volta
      che la apri online)

  In alternativa, per cambiare più file insieme:
  → "Add file" → "Upload files" → sovrascrivi i vecchi


═══════════════════════════════════════════════════════════════════
  ⚠️  PROBLEMI COMUNI
═══════════════════════════════════════════════════════════════════

  ❓ "Il banner 'Installa' non appare"
     → Aspetta 5-10 secondi dopo che la pagina è caricata
     → Chrome deve vedere il manifest.json (verifica che sia
        caricato nella root del repo, non in una sottocartella)
     → Alternativa manuale: menu ⋮ → "Aggiungi a schermata Home"

  ❓ "GitHub Pages dice 'Not found' dopo aver attivato"
     → Aspetta 3-5 minuti dopo il primo Save, non è istantaneo
     → Verifica che index.html sia nella ROOT del repo
        (non in una sottocartella)

  ❓ "Il meteo non si carica dentro l'app installata offline"
     → Normale: la meteo richiede connessione internet
     → Tutto il resto (itinerario, hotel, ristoranti, ferry)
        funziona OFFLINE grazie al service worker

  ❓ "Voglio un URL più corto/personalizzato"
     → GitHub Pages non permette custom senza dominio a pagamento
     → Alternativa: acquista un dominio (es: viaggiotahiti.it,
        ~10 €/anno da Namecheap/OVH) e lo colleghi al repo

  ❓ "Sono su iPhone, non Android"
     → Su Safari (obbligatorio, non Chrome iOS): tocca ⎋ in basso
        → "Aggiungi alla schermata Home"
     → Le PWA su iOS hanno alcune limitazioni ma funzionano

  ❓ "Voglio rendere il repo privato"
     → GitHub Pages richiede repo pubblico per la versione gratuita
     → I file sono pubblici ma nessuno può trovarli senza URL
     → Non caricare mai password/dati sensibili nel repo


═══════════════════════════════════════════════════════════════════
  📞 RIFERIMENTI RAPIDI
═══════════════════════════════════════════════════════════════════

  GitHub signup:        https://github.com/signup
  Nuovo repository:     https://github.com/new
  Docs GitHub Pages:    https://docs.github.com/pages
  Chrome install PWA:   chrome://apps (per gestire le app installate)


═══════════════════════════════════════════════════════════════════
  🎯 STIMA TEMPI TOTALI
═══════════════════════════════════════════════════════════════════

  Step 1 (account GitHub):      ~ 3 min  (skip se già ce l'hai)
  Step 2 (crea repository):     ~ 1 min
  Step 3 (upload file):         ~ 2 min  (dipende da internet)
  Step 4 (attiva Pages):        ~ 1 min + 3 min attesa deploy
  Step 5 (installa su Android): ~ 2 min

  TOTALE:                       ~ 10-15 min


  Buon viaggio! 🌺🐢🌴
