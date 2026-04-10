import serviceSkup from '../images/Skup.webp'

function SkupAutPage() {
  return (
    <div className="page-shell__inner skup-page">
      <section className="section-block content-section panel panel--feature skup-section skup-panel">
        <div className="skup-copy">
          <p className="section-kicker">Skup aut</p>
          <h2>Skup aut Głogów – kupujemy samochody w każdym stanie</h2>
          <p className="skup-lead">
            Skupujemy samochody używane, uszkodzone i powypadkowe w Głogowie i okolicach.
Oferujemy szybką wycenę auta, minimum formalności i natychmiastową płatność. Niezależnie od stanu pojazdu – znajdziemy rozwiązanie i zaproponujemy uczciwą cenę.
          </p>
          <div className="skup-hero-image">
            <img src={serviceSkup} alt="Skup aut Kupię Twoją Brykę" className="skup-hero-image__media" />
          </div>
        </div>

        <div className="skup-info">
          <div className="skup-info__item">
            <h3>Jakie auta skupujemy?</h3>
            <p>Kupujemy samochody sprawne, uszkodzone, powypadkowe oraz bez ważnego przeglądu.
Interesują nas auta osobowe, dostawcze i firmowe – również te, które trudno sprzedać prywatnie.</p>
          </div>
          <div className="skup-info__item">
            <h3>Jak wygląda wycena auta?</h3>
            <p>Wycena zależy od stanu technicznego pojazdu, rocznika, przebiegu oraz dokumentów.
Podaj nam podstawowe informacje, a przygotujemy indywidualną ofertę – szybko i bez zobowiązań.</p>
          </div>
        </div>

        <section className="skup-form-block" aria-labelledby="skup-form-title">
          <div className="skup-form-block__heading">
            <p className="section-kicker">Wycena</p>
            <h2 id="skup-form-title">Napisz do nas w sprawie skupu auta.</h2>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" className="skup-form">
            <input type="hidden" name="access_key" value="eda88eed-3eee-467e-99de-c3f8da543dac" />
            <input type="hidden" name="from_name" value="Kupię Twoją Brykę - Skup aut" />

            <label className="skup-form__field">
              <span>Imię i nazwisko</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label className="skup-form__field">
              <span>Telefon</span>
              <input type="tel" name="phone" autoComplete="tel" required />
            </label>

            <label className="skup-form__field">
              <span>E-mail</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label className="skup-form__field">
              <span>Marka</span>
              <input type="text" name="car_brand" required />
            </label>

            <label className="skup-form__field">
              <span>Model</span>
              <input type="text" name="car_model" required />
            </label>

            <label className="skup-form__field">
              <span>Po lifcie</span>
              <input type="text" name="facelift_status" placeholder="(opcjonalnie)" />
            </label>

            <label className="skup-form__field">
              <span>Rocznik</span>
              <input type="number" name="car_year" min="1950" max="2099" inputMode="numeric" required />
            </label>

            <label className="skup-form__field">
              <span>Przebieg</span>
              <input type="number" name="car_mileage" min="0" inputMode="numeric" required />
            </label>

            <label className="skup-form__field">
              <span>Moc silnika</span>
              <input type="text" name="engine_power" placeholder="np. 150 KM" required />
            </label>

            <label className="skup-form__field">
              <span>Pojemność</span>
              <input type="text" name="engine_capacity" placeholder="np. 2.0" required />
            </label>

            <label className="skup-form__field skup-form__field--full">
              <span>Tytuł wiadomości</span>
              <input type="text" name="subject" defaultValue="Proszę o wycenę auta." required />
            </label>

            <label className="skup-form__field skup-form__field--full">
              <span>Dodatkowe wyposażenie</span>
              <textarea name="equipment" rows="4" />
            </label>

            <label className="skup-form__field skup-form__field--full">
              <span>Uszkodzenia</span>
              <textarea name="damage" rows="4" />
            </label>

            <label className="skup-form__field skup-form__field--full">
              <span>Wiadomość</span>
              <textarea name="message" rows="6" />
            </label>

            <div className="skup-form__actions">
              <button type="submit" className="button button--primary skup-form__submit">
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  )
}

export default SkupAutPage
