---
title: "<address>: Ang Contact Address Element"
description: Ang HTML tag na ito ang ginagamit para i-mark up ang contact information ng isang tao o organisasyon.
image: /assets/images/posts/address-element/cover.png
seo_image: /assets/images/posts/address-element/seo-cover.png
author: teacherbuknoy
tags: [html, deep dive]
---

Ang `<address></address>` ang ginagamit para i-mark up ang contact information ng isang tao o organisasyon.

<div class="code-sample">
  <pre class="code-snippet"><code data-language="html">&lt;address>
  Francis Rubio&lt;br>
  &lt;a href="mailto:devFrancisRubio@gmail.com">✉️ Email&lt;/a>&lt;br>
  &lt;a href="tel:+13115552368">📞 (311) 555-2368&lt;/a>
&lt;/address></code></pre>
  <div class="code-result">
    <iframe src="/assets/images/posts/address-element/example-1.html"></iframe>
  </div>
</div>

## Details

Nire-represent ng `address` element ang contact information para sa isang `article` element o para sa `body` element. Kapag nasa loob ito ng `body` element pero wala ito sa loob ng isang `article` element, nire-represent nito ang contact information para sa buong webpage.

Puwedeng gumamit ng kahit na anong format ang content sa loob ng `address` element. Puwede itong magkaroon ng kahit anong contact information gaya ng address ng bahay o opisina, email address, mobile o telephone number, usernames sa mga social media networks, geographic coordinates, at iba pa. Siguruhin lang na kasama sa loob ng `address` element ang pangalan ng tao, grupo, o organisasyon na tinutukoy ng `address` element.

<div class="bordered box">
  <p><strong>Halimbawa:</strong> paglalagay ng geographic coordinates sa loob ng <code>address</code> element.</p>
  <pre class="code-snippet"><code data-language="html">&lt;address>Lola the cat is at
Latitude: 51.413126
Longtitude: -0.298219
&lt;/address></code></pre>

  <p><strong>Halimbawa:</strong> paglalagay ng address, telephone, at fax numbers sa loob ng <code>address</code> element.</p>

  <pre class="code-snippet"><code data-language="html">&lt;address>      
UNIVERSITY INTERSCHOLASTIC LEAGUE&lt;br>
1701 Manor Road, Austin, TX 78722&lt;br>
Tel: (512) 471-5883 | Fax: (512) 471-5908
&lt;/address></code></pre>
</div>

Puwedeng gamitin ang `address` element sa maraming contexts, gaya ng contact information ng isang negosyo na nakalagay sa header ng webpage.

<div class="bordered box">
  <p><b>Example</b>: markup para sa footer ng isang website. May laman itong contact information at copyright notice.</p>

  <div class="code-sample">
    <pre class="code-snippet"><code data-language="html">&lt;footer>
&lt;address>
  For more details, contact
  &lt;a href="mailto:js@example.com">John Smith&lt;/a>.
&lt;/address>
&lt;p>&lt;small>© copyright 2038 Example Corp.&lt;/small>&lt;/p>
&lt;/footer></code></pre>
    <div class="code-result">
      <iframe src="/assets/images/posts/address-element/example-3.html"></iframe>
    </div>
  </div>
</div>

Puwede rin itong gamitin para i-mark up ang pangalan ng author kung ilalagay ang `address` element sa loob ng `article` element.

<div class="bordered-box">
  <p><strong>Note:</strong> puwede ring gamitin ang <code>a</code> element para i-mark up ang pangalan ng author kung lalagyan ito ng `rel="author"` attribute. Siguruhin lang na may kasama rin itong URL sa <code>href</code> kung saan makikita ang mas detalyadong information tungkol sa author.</p>
  <div class="code-sample">
    <pre class="code-snippet"><code data-language="html">&lt;article>
  &lt;header>
    &hellip;
    &lt;p>
      Written by: 
      &lt;a href="/author/francis-rubio" rel="author">
        Francis Rubio
      &lt;/a>
    &lt;/p>
  &lt;/header>
  &hellip;
&lt;/article></code></pre>
  <div class="code-result">
    <iframe src="/assets/images/posts/address-element/example-2.html"></iframe>
  </div>
  </div>
</div>

**Hindi dapat** gamitin ang `address` para i-mark up ang mga contact information na wala namang kinalaman sa buong webpage o `article` element. Halimbawa, hindi ginagamit ang `address` para i-represent ang office address ng isang taong na-mention lang sa article. Para sa ganitong kaso, puwedeng gamitin ang `p` element.

<div class="bordered error box">
  <p><strong>Halimbawa:</strong> Mali ito!</p>
  <pre class="code-snippet"><code data-language="html">&lt;p>
  In-interview namin sila. Bago kami nagpunta sa kanilang opisina,
  nagpadala muna kami ng sulat sa kanilang postal address
  &lt;address>3102 Highway 98 Mexico Beach, FL&lt;/address>.
&lt;/p></code></pre>
</div>

**Hindi dapat** magkaroon ng ibang laman ang `address` element maliban sa pangalan at contact information ng tao, grupo, o organisasyon.

Kung ginagamit mo ito para i-mark up ang author ng article, **huwag isama rito** ang publication date ng article. Mas akmang gamitin ang `<time></time>` element para sa publication date at iba pang petsa.

<div class="bordered error box">
  <p><strong>Halimbawa:</strong> Mali ito!</p>

  <pre class="code-snippet"><code data-language="html">&lt;p>
  Isinulat ni:
  &lt;address>
    Francis Rubio (May 21, 2020)
  &lt;/address>
&lt;/p></code></pre>
</div>

<div class="bordered success box">
  <p><strong>Halimbawa:</strong> Mas tama ito</p>
  <pre class="code-snippet"><code data-language="html">&lt;p>
  Isinulat ni:
  &lt;address>
    Francis Rubio
  &lt;/address>
  (&lt;time datetime="2020-05-21">May 21, 2020&lt;/time>)
&lt;/p></code></pre>
</div>

By default, pare-parehas ang styling ng `<i>`, `<em>`, at `<address>`. Pero tandaan na **meaning** ang dapat nating tingnan kapag pumipili ng HTML tags na gagamitin. Gamitin ang `i` para sa mga text na iba kumpara sa context nito. Gamitin ang `em` para lagyan ng emphasis ang isang salita, phrase, o pangungusap kapag binabasa ito. Gamitin ang `address` para i-mark up ang contact information ng tao, grupo, o organisasyong may-ari ng webpage o sumulat ng article.

## References

- [`<address>`: The Contact Address element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/addresss)
- [HTML Standard](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)
- [HTML 5.2: 4.4. Grouping Content](https://www.w3.org/TR/html52/grouping-content.html#the-address-element)