---
title: "&lt;address>: Ang Contact Address Element"
description: Ang HTML tag na ito ang ginagamit para i-mark up ang contact information ng isang tao o organisasyon.
permalink: /articles/address-ang-contact-address-element/
image: 
  src: /assets/images/posts/address-element/cover.png
  color:
    light: 199 79% 91%
    dark: 217 46% 31%
seo_image: /assets/images/posts/address-element/seo-cover.png
author: teacherbuknoy
tags: 
  - html
  - deep dive
---

Ang `<address></address>` ang ginagamit para i-mark up ang contact information ng isang tao o organisasyon.

<div class="code-sample">

```html
<address>
  Francis Rubio<br />
  <a href="mailto:devFrancisRubio@gmail.com">✉️ Email</a><br />
  <a href="tel:+13115552368">📞 (311) 555-2368</a>
</address>
```

  <iframe class="code-result" src="/assets/images/posts/address-element/example-1.html"></iframe>
</div>

## Details

Nire-represent ng `address` element ang contact information para sa isang `article` element o para sa `body` element. Kapag nasa loob ito ng `body` element pero wala ito sa loob ng isang `article` element, nire-represent nito ang contact information para sa buong webpage.

Puwedeng gumamit ng kahit na anong format ang content sa loob ng `address` element. Puwede itong magkaroon ng kahit anong contact information gaya ng address ng bahay o opisina, email address, mobile o telephone number, usernames sa mga social media networks, geographic coordinates, at iba pa. Siguruhin lang na kasama sa loob ng `address` element ang pangalan ng tao, grupo, o organisasyon na tinutukoy ng `address` element.

<div class="bordered box">
  <p><strong>Halimbawa:</strong> paglalagay ng geographic coordinates sa loob ng <code>address</code> element.</p>
  
```html
<address>Lola the cat is at
Latitude: 51.413126
Longtitude: -0.298219
</address>
```

  <p><strong>Halimbawa:</strong> paglalagay ng address, telephone, at fax numbers sa loob ng <code>address</code> element.</p>

```html
<address>
  UNIVERSITY INTERSCHOLASTIC LEAGUE<br />
  1701 Manor Road, Austin, TX 78722<br />
  Tel: (512) 471-5883 | Fax: (512) 471-5908
</address>
```

</div>

Puwedeng gamitin ang `address` element sa maraming contexts, gaya ng contact information ng isang negosyo na nakalagay sa header ng webpage.

<div class="bordered box">
  <p><b>Example</b>: markup para sa footer ng isang website. May laman itong contact information at copyright notice.</p>

  <div class="code-sample">
    
```html
<footer>
<address>
  For more details, contact
  <a href="mailto:js@example.com">John Smith</a>.
</address>
<p><small>© copyright 2038 Example Corp.</small></p>
</footer>
```
    
  <iframe class="code-result" src="/assets/images/posts/address-element/example-3.html"></iframe>

  </div>
</div>

Puwede rin itong gamitin para i-mark up ang pangalan ng author kung ilalagay ang `address` element sa loob ng `article` element.

<div class="bordered-box">
  <p><strong>Note:</strong> puwede ring gamitin ang <code>a</code> element para i-mark up ang pangalan ng author kung lalagyan ito ng `rel="author"` attribute. Siguruhin lang na may kasama rin itong URL sa <code>href</code> kung saan makikita ang mas detalyadong information tungkol sa author.</p>
  <div class="code-sample">

```html
<article>
  <header>
    …
    <p>
      Written by: 
      <a href="/author/francis-rubio" rel="author">
        Francis Rubio
      </a>
    </p>
  </header>
  …
</article>
```

  <iframe class="code-result" src="/assets/images/posts/address-element/example-2.html"></iframe>
  </div>
</div>

**Hindi dapat** gamitin ang `address` para i-mark up ang mga contact information na wala namang kinalaman sa buong webpage o `article` element. Halimbawa, hindi ginagamit ang `address` para i-represent ang office address ng isang taong na-mention lang sa article. Para sa ganitong kaso, puwedeng gamitin ang `p` element.

<div class="bordered error box">
  <p><strong>Halimbawa:</strong> Mali ito!</p>

```html
<article>
  <header>
    …
    <p>
      Written by: 
      <a href="/author/francis-rubio" rel="author">
        Francis Rubio
      </a>
    </p>
  </header>
  …
</article>
```

</div>

**Hindi dapat** magkaroon ng ibang laman ang `address` element maliban sa pangalan at contact information ng tao, grupo, o organisasyon.

Kung ginagamit mo ito para i-mark up ang author ng article, **huwag isama rito** ang publication date ng article. Mas akmang gamitin ang `<time></time>` element para sa publication date at iba pang petsa.

<div class="bordered error box">
  <p><strong>Halimbawa:</strong> Mali ito!</p>

```html
<p>
  Isinulat ni:
  <address>
    Francis Rubio (May 21, 2020)
  </address>
</p>
```
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

```html
<p>
  Isinulat ni:
  <address>
    Francis Rubio
  </address>
  (<time datetime="2020-05-21">May 21, 2020</time>)
</p>
```

</div>

By default, pare-parehas ang styling ng `<i>`, `<em>`, at `<address>`. Pero tandaan na **meaning** ang dapat nating tingnan kapag pumipili ng HTML tags na gagamitin. Gamitin ang `i` para sa mga text na iba kumpara sa context nito. Gamitin ang `em` para lagyan ng emphasis ang isang salita, phrase, o pangungusap kapag binabasa ito. Gamitin ang `address` para i-mark up ang contact information ng tao, grupo, o organisasyong may-ari ng webpage o sumulat ng article.

## References

- [`<address>`: The Contact Address element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/addresss)
- [HTML Standard](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)
- [HTML 5.2: 4.4. Grouping Content](https://www.w3.org/TR/html52/grouping-content.html#the-address-element)
