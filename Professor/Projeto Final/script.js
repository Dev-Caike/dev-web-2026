/* ── CONFIGURAÇÃO ── edite só estas duas linhas ── */
const WHATSAPP = "5511999999999";
const EMAIL    = "seuemail@email.com";


/* ── VALIDAÇÃO ── */
function validar() {
  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  // Limpa erros anteriores
  document.getElementById('campo-nome').classList.remove('campo-invalido');
  document.getElementById('campo-email').classList.remove('campo-invalido');
  document.getElementById('campo-assunto').classList.remove('campo-invalido');
  document.getElementById('campo-mensagem').classList.remove('campo-invalido');
  document.getElementById('erro-nome').classList.add('d-none');
  document.getElementById('erro-email').classList.add('d-none');
  document.getElementById('erro-assunto').classList.add('d-none');
  document.getElementById('erro-mensagem').classList.add('d-none');
  document.getElementById('alerta-erro').classList.add('d-none');

  var ok = true;

  // Verifica cada campo
  if (nome === '') {
    document.getElementById('campo-nome').classList.add('campo-invalido');
    document.getElementById('erro-nome').classList.remove('d-none');
    ok = false;
  }

  if (email === '' || email.indexOf('@') === -1) {
    document.getElementById('campo-email').classList.add('campo-invalido');
    document.getElementById('erro-email').classList.remove('d-none');
    ok = false;
  }

  if (assunto === '') {
    document.getElementById('campo-assunto').classList.add('campo-invalido');
    document.getElementById('erro-assunto').classList.remove('d-none');
    ok = false;
  }

  if (mensagem.length < 10) {
    document.getElementById('campo-mensagem').classList.add('campo-invalido');
    document.getElementById('erro-mensagem').classList.remove('d-none');
    ok = false;
  }

  if (!ok) {
    document.getElementById('alerta-erro').classList.remove('d-none');
  }

  return ok;
}


/* ── ENVIO PELO WHATSAPP ── */
document.getElementById('btn-whatsapp').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  var texto = 'Olá! Meu nome é ' + nome + '.\n\nAssunto: ' + assunto + '\n\n' + mensagem + '\n\nRetorno: ' + email;
  window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank');
  document.getElementById('form-contato').reset();
});


/* ── ENVIO POR E-MAIL ── */
document.getElementById('btn-email').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  var corpo = 'Olá!\n\nMeu nome é ' + nome + ' (' + email + ').\n\n' + mensagem;
  window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);
});


/* ── FECHAR MENU MOBILE AO CLICAR NUM LINK ── */
document.querySelectorAll('#menu .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    var instancia = bootstrap.Collapse.getInstance(document.getElementById('menu'));
    if (instancia) instancia.hide();
  });
});
