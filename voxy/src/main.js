import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './style.css';
import { normalizeEns } from './recovery.js';
import { mountExperience } from './experience.js';
import './experience.css';
import './refinement.css';

const icons = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  key: '<circle cx="8" cy="9" r="5"/><path d="m12 13 8 8m-4-4 3-3m-6 0 3-3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const logo = '<span class="brand-mark" aria-hidden="true"><i></i><i></i></span><span>voxy<span class="brand-dot">®</span></span>';

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header shell">
    <a class="brand" href="#" aria-label="Voxy home">${logo}</a>
    <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#why-voxy">Why Voxy</a><a href="#faq">FAQs</a></nav>
    <button class="button button-small" data-open="protect">Protect my wallet ${icon('diagonal')}</button>
  </header>
  <main id="main">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="eyebrow"><span class="status-dot"></span> Your wallet. Your name. Your way back.</div>
        <h1 id="hero-title"><span class="headline-line">Lose your keys.</span><span class="headline-line">Keep your</span><span class="headline-line title-last">crypto<span class="asterisk">✳</span></span></h1>
        <p class="hero-description">Life happens. Your crypto shouldn’t disappear.<br>Meet wallet recovery built around your ENS name.<br>Set it up once, on a calm day — for the bad one.</p>
        <div class="hero-actions"><button class="button" data-open="protect">Protect my wallet ${icon('diagonal')}</button><button class="text-button" data-open="recover">I need to recover ${icon('arrow')}</button></div>
        <p class="hero-footnote"><b>✳</b>Because "I'll write it down later" isn't a backup plan.</p>
        <div class="hero-note">${icon('shield')} Your keys stay yours. Always.</div>
      </div>
      <div class="portal-scene" aria-label="An animated ASCII portal surrounds an illustrative ENS recovery card">
        <span class="coordinate coordinate-top">VOXY / RECOVERY PORTAL / V.01</span>
        <canvas id="portal" aria-hidden="true"></canvas>
        <div class="portal-orbit orbit-one"></div><div class="portal-orbit orbit-two"></div>
        <span class="cross cross-one">+</span><span class="cross cross-two">+</span>
        <div class="identity-card">
          <div class="identity-top"><span class="identity-avatar">v</span><span class="mono">YOUR WAY BACK</span>${icon('diagonal')}</div>
          <div class="ens-name">you.eth<span class="ens-tag" aria-hidden="true">◈</span></div>
          <div class="identity-bottom"><span><i class="status-dot"></i> Recovery, reimagined.</span>${icon('lock')}</div>
        </div>
        <div class="portal-caption"><span class="tiny-box"></span> A name you remember.<br><span class="caption-indent">A wallet you don’t lose.</span></div>
        <div class="portal-controls"><button id="motion-toggle" aria-pressed="false">Ⅱ Pause motion</button><button id="replay-intro">↻ Replay intro</button></div>
      </div>
      <div class="hero-footer"><span>Built around <b class="ens-symbol">◈</b> <strong>ENS</strong><span class="ethereum">◆</span> Ethereum</span></div>
    </section>
    <section class="recovery-section shell" id="how-it-works" aria-labelledby="recovery-heading">
      <div class="recovery-heading"><span class="section-kicker">Recovery, in three moves</span><h2 id="recovery-heading">Your name is<br>the beginning.</h2><p>A plan made in advance beats one made in panic.</p></div>
      <div class="recovery-workspace">
        <div class="recovery-tabs" role="tablist" aria-label="Explore recovery steps" aria-orientation="vertical">
          <button role="tab" id="step-name" aria-controls="panel-name" aria-selected="true" tabindex="0"><span class="step-index">01</span><span><strong>A name you know.</strong><small>Start with your ENS identity.</small></span><span class="step-arrow" aria-hidden="true">↗</span></button>
          <button role="tab" id="step-plan" aria-controls="panel-plan" aria-selected="false" tabindex="-1"><span class="step-index">02</span><span><strong>A plan you choose.</strong><small>Prepare your recovery path.</small></span><span class="step-arrow" aria-hidden="true">↗</span></button>
          <button role="tab" id="step-home" aria-controls="panel-home" aria-selected="false" tabindex="-1"><span class="step-index">03</span><span><strong>A way back to you.</strong><small>Follow your configured plan.</small></span><span class="step-arrow" aria-hidden="true">↗</span></button>
        </div>
        <div class="recovery-stage">
          <div class="recovery-stage-top"><span class="mono">VOXY / RECOVERY EXPLORER</span><span class="explorer-preview">Concept preview</span></div>
          <div id="panel-name" class="recovery-panel" role="tabpanel" aria-labelledby="step-name" tabindex="0"><div class="recovery-art art-name" aria-hidden="true"><span class="ascii-bracket">[</span><span class="recovery-ens">you.eth</span><span class="ascii-bracket">]</span></div><div class="panel-copy"><span class="mono">01 / IDENTITY</span><h3>Less hexadecimal.<br>More human.</h3><p>Your ENS name is a familiar starting point for your wallet. Recovery still requires a compatible wallet and an authorized recovery method.</p></div></div>
          <div id="panel-plan" class="recovery-panel" role="tabpanel" aria-labelledby="step-plan" tabindex="0" hidden><div class="recovery-art art-plan" aria-hidden="true"><span>[ you ]</span><span class="ascii-path">······</span><span class="plan-symbol">{ key }</span><span class="ascii-path">······</span><span>[ plan ]</span></div><div class="panel-copy"><span class="mono">02 / PREPARATION</span><h3>A little foresight.<br>A lot less panic.</h3><p>Choose and authorize a recovery method before you need it. Know what’s required to regain access, while you still have access.</p></div></div>
          <div id="panel-home" class="recovery-panel" role="tabpanel" aria-labelledby="step-home" tabindex="0" hidden><div class="recovery-art art-home" aria-hidden="true"><span class="home-orbit">(</span><span class="home-symbol">&gt;_</span><span class="home-orbit">)</span></div><div class="panel-copy"><span class="mono">03 / RETURN</span><h3>New keys.<br>Same you.</h3><p>Start with your name, complete your configured verification, and authorize your recovery. Your identity is the starting point, never a substitute for proof.</p></div></div>
          <div class="recovery-stage-bottom"><span>Explore the flow. No transactions.</span><button class="text-button" data-open="recover">Preview recovery ${icon('arrow')}</button></div>
        </div>
      </div>
    </section>
    <section class="why-section" id="why-voxy"><div class="shell why-layout"><div class="why-art" aria-hidden="true"><span class="pixel-key">✳</span><span class="mono">A BACKUP PLAN.<br>NOT A COMPROMISE.</span></div><div class="why-copy"><span class="section-kicker">OWNERSHIP SHOULD FEEL LIKE THIS</span><h2>Your wallet.<br>Your life.<br>Your way back.</h2><p>Web3 handed you ownership, then handed you a sleepless night to go with it. Voxy is exploring what comes next: recovery a person can actually follow.</p><div class="benefit">${icon('globe')} <span>A name, not a string of characters.</span></div><div class="benefit">${icon('key')} <span>You keep the keys. We design the way back.</span></div><div class="benefit">${icon('shield')} <span>A recovery path in plain words.</span></div><button class="text-button" data-open="protect">Protect my wallet ${icon('arrow')}</button></div></div></section>
    <section class="faq-section shell section" id="faq"><div><span class="section-kicker">GOOD QUESTIONS.</span><h2>A little clarity.<br>A lot less worry.</h2><p>Because peace of mind starts with understanding.</p></div><div class="faq-list">
      <details><summary>What is Voxy?<span>+</span></summary><p>An idea, working in your browser: recovery that starts from your name instead of a panicked checklist. Nothing to download, nothing connected — just the front row on what it could feel like.</p></details>
      <details><summary>Can I recover a wallet with only an ENS name?<span>+</span></summary><p>No — and any product promising otherwise should worry you. A name says who you are. Recovery takes a method configured in advance, by a wallet that supports one.</p></details>
      <details><summary>Does Voxy need my seed phrase?<span>+</span></summary><p>Never. Not here, not in the design it points to. If anything asks for your seed phrase, it isn’t us — that’s the line between recovery and bait.</p></details>
      <details id="faq-compat"><summary>Can I use it with my wallet today?<span>+</span></summary><p>Not yet. There is no live wallet connection, no ENS lookup, nothing onchain — walk the flow, and check back once a recovery contract exists.</p></details>
    </div></section>
    <section class="final-cta shell"><span class="section-kicker">FOR ALL THE “JUST IN CASE” MOMENTS.</span><h2>Give your wallet<br>a way home<span>✳</span></h2><button class="button" data-open="protect">Protect my wallet ${icon('diagonal')}</button><div class="cta-dots" aria-hidden="true"></div></section>
  </main>
  <footer class="site-footer shell"><a class="brand" href="#" aria-label="Voxy home">${logo}</a><span>A name. A way back.</span><a href="#faq">Questions? Start here ${icon('diagonal')}</a><span class="copyright">© ${new Date().getFullYear()} Voxy</span></footer>
  <dialog id="recovery-dialog" data-lenis-prevent><button class="dialog-close" aria-label="Close recovery preview">${icon('close')}</button><div id="dialog-content"></div></dialog>
`;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const lenis = new Lenis({ autoRaf: true, duration: 1.15, smoothWheel: !reducedMotion.matches, anchors: true });
reducedMotion.addEventListener('change', () => { lenis.options.smoothWheel = !reducedMotion.matches; });

const dialog = document.querySelector('#recovery-dialog');
let lastTrigger;
// localStorage can throw in private browsing modes — never let it kill the page.
const localGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
const localSet = (key, value) => { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } };
let lastName = localGet('voxy:ens') || '';
if (!/^[a-z0-9-]{3,20}\.eth$/.test(lastName)) lastName = '';
function renderForm(mode, prevName) {
  const recover = mode === 'recover';
  document.querySelector('#dialog-content').innerHTML = `<span class="preview-label">${recover ? 'RECOVERY' : 'SETUP'} PREVIEW</span><div class="dialog-symbol ${recover ? 'recover' : ''}">${icon(recover ? 'key' : 'shield')}</div><h2 id="dialog-title" tabindex="-1">${recover ? 'Need a way back?<br>We can draw one.' : 'Protect it<br>before you need to.'}</h2>${recover ? `<p class="dialog-reassure">${icon('lock')} <span>Type a name here and nothing leaves your device. No keys are requested, no wallet connects, nothing is sent — this canvas is for breathing and planning.</span></p><p>Recovery starts with the ENS name your wallet answers to.</p>` : `<p>The calm day is when this gets built. Start with your ENS name and walk the protection you would put in place.</p>`}<form id="ens-form" novalidate><label for="ens-input">Your ENS name</label><div class="input-wrap"><input id="ens-input" name="ens" value="${prevName ?? lastName}" placeholder="you.eth" autocomplete="off" autocapitalize="none" spellcheck="false" required aria-describedby="ens-error"/><span>↗</span></div><p id="ens-error" class="error" role="alert"></p><button class="button" type="submit">${recover ? 'Preview my recovery path' : 'Set up my protection'} ${icon('arrow')}</button></form>${recover ? `<p class="dialog-hold">When this becomes real, have on hand: the wallet you are locked out of, a fresh set of keys, and whatever your configured recovery method asks you to verify.</p>` : ''}<div class="dialog-note">${icon('lock')} Preview only. No wallet connection or transaction.</div>`;
  dialog.setAttribute('aria-labelledby', 'dialog-title');
  if (!dialog.open) { dialog.showModal(); lenis.stop(); }
  document.querySelector('#ens-input').focus({ preventScroll: true });
  document.querySelector('#ens-form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#ens-input');
    const name = normalizeEns(input.value);
    if (!name) { document.querySelector('#ens-error').textContent = 'Enter a name such as you.eth (letters, numbers, and hyphens).'; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
    const content = document.querySelector('#dialog-content');
    lastName = name;
    localSet('voxy:ens', name);
    const recoverResult = recover ? `<p class="checklist-note">Two minutes, when it is real. The foresight is the part that matters — configuring this only works while you still have access.</p><details class="faq-inline"><summary>Not sure your wallet qualifies? ${icon('diagonal')}</summary><p>Not yet — nothing here is connected, so there is nothing to check against. When a recovery contract exists, wallet support answers right here, in the full FAQ.</p><button class="text-button" id="faq-full" type="button">Full FAQ ${icon('arrow')}</button></details>` : '';
    content.innerHTML = `<span class="preview-label">${recover ? 'RECOVERY' : 'SETUP'} PREVIEW</span><div class="dialog-symbol ${recover ? 'recover' : ''} success">${icon('check')}</div><h2 id="result-heading" tabindex="-1"></h2><p>${recover ? 'Here is the path back we would draw for this name.' : 'Here is the recovery plan you could set up for your wallet.'}</p><ol class="recovery-checklist">${recover ? `<li><span>1</span>Resolve <b class="check-name"></b> back to your wallet</li><li><span>2</span>Verify through the recovery method you configured in advance</li><li><span>3</span>Move access to a fresh set of keys — the name stays yours</li>` : `<li><span>1</span>Resolve your ENS name to a wallet</li><li><span>2</span>Choose a compatible recovery method</li><li><span>3</span>Review and authorize your recovery plan</li>`}</ol>${recoverResult}<p class="preview-warning">This is an illustrative flow. We have not looked up this name or checked for an existing recovery plan.</p><button class="text-button" id="preview-back">${recover ? 'Look at another name' : 'Try another name'} ${icon('arrow')}</button>`;
    dialog.setAttribute('aria-labelledby', 'result-heading');
    document.querySelector('#result-heading').textContent = name;
    const checkName = document.querySelector('.check-name');
    if (checkName) checkName.textContent = name;
    document.querySelector('#result-heading').focus();
    const faqFull = document.querySelector('#faq-full');
    if (faqFull) faqFull.addEventListener('click', () => {
      dialog.close();
      const target = document.querySelector('#faq-compat summary');
      if (reducedMotion.matches) target.scrollIntoView(); else lenis.scrollTo(target);
      setTimeout(() => target.focus({ preventScroll: true }), 350);
    });
    document.querySelector('#preview-back').addEventListener('click', () => { renderForm(mode, lastName); });
  });
}
function showPreview(mode, trigger) {
  lastTrigger = trigger;
  renderForm(mode);
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => showPreview(button.dataset.open, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { lenis.start(); lastTrigger?.focus(); });

mountExperience({ lenis, reducedMotion });
