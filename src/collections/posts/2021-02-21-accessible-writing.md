---
title: "Accessible Writing"
description: Ilang tips para maging accessible ang text mo
image: 
  src: /assets/images/posts/accessible-writing/cover.png
  color:
    light: 344 100% 79%
    dark:  209 40% 20%
seo_image: /assets/images/posts/accessible-writing/seo-cover.png
author: teacherbuknoy
tags:
  - accessibility
---

Ang WCAG o [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20/) ay isang set ng guidelines para sa mga website. Kapag sinusunod ito ng isang website, nagiging mas accessible ito para sa lahat, lalo na sa mga may disabilities, kasama na ang mga bulag, malabo ang mata, bingi o mahina ang pandinig, mga may learning disabilities, cognitive limitations, mga nahihirapang igalaw ang ilang bahagi ng katawan nila, mga may speech disability, photosensitivity o mga sensitive sa ilang kulay o maliliwanag na ilaw, at iba pa.

Sa [WCAG 2.0 3.1.5](https://www.w3.org/TR/WCAG20/#meaning), binanggit ang guideline tungkol sa Reading Level:

> When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available. (Level AAA)

Pansinin na **Level AAA** ito. Ibig sabihin, nire-recommend ng WCAG na sundin ang guideline na ito, pero hindi ito magiging required sa lahat ng uri ng content. Hindi kasi applicable ang rule na ito sa ilang uri content, gaya ng mga technical document, research papers, at iba pa na nagre-require ng mas mataas na level ng reading comprehension.

Pero kahit hindi ito required na gawin sa lahat ng website, magandang practice na i-apply natin ito kahit sa pinakamaliit na parts ng site natin. Tandaan na hindi lang tumutukoy ang salitang <i lang="en">text</i> sa mga text na nasa isang blog, news article, at iba pa. Kasama rin dito ang text na nasa mga button, links, at iba pang interactive elements gaya ng <q>Submit</q>, <q>Continue</q>, <q>Add to cart</q> at iba pa. Ang totoo, mas mahalaga na subukan nating i-apply ang guideline na ito sa mga interactive element dahil kailangang naiintindihan ng users natin kung ano ang mangyayari kapag nakipag-interact sila sa mga element na iyon.

Sa post na <cite>[Standards for Writing Accessibly](https://alistapart.com/article/standards-for-writing-accessibly/)</cite> mula sa [A List Apart](https://alistapart.com/)[^1], nagbigay ng ilang tips sina Michael J. Metts at Andy Welfle tungkol sa pagsulat ng text para masunod ang accessibility guideline na ito.

## Screen readers

Ang mga screen reader ay mga software na ginagamit ng mga may disability sa paningin para malaman nila kung ano ang nasa screen. Binabasa sa kanila ng screen readers kung ano ang nasa screen, gaya ng buttons, description ng mga image (alt text), at iba pa. At ayon kina Metts at Welfle, trabaho natin bilang developers ng mga user interface na bigyan ng context ang mga interactive elements ng website o web app natin. Ito ang ilan sa mga tips na ibinigay nila:

- **Huwag matakot na pahabain ang mga sentence o phrase kung ito ang kailangan para maging mas malinaw ang content**. Ayon kina Metts at Welfle, 2 - 5 words per second ang average reading speed ng mga taong may maayos na paningin. Samantala, umaabot sa 35 syllables per second ang naiinntindihan ng mga taong gumagamit ng screen readers. Mas mabilis ito kumpara sa pagbabasa ng mga may paningin. Kung kinakailangang mas mahaba ang text para maintindihan ito ng users mo, huwag matakot na gawin ito.
- **Gumamit ng headings**. Kung isang malaking bloke ng text ang isinulat mo, lalaktawan ito ng mga mambabasa, kapuwa mga may paningin at mga gumagamit ng screen readers. Kaya napakahalaga na gumamit ng mga heading para bigyan ng structure ang articles o posts mo.

## Magsulat ayon sa pagkakasunod-sunod, hindi ayon sa posisyon

Bilang web developers, malamang na pamilyar kayo sa responsive web design. Dahil dito, puwedeng iba-iba ang maging layout ng user interface depende sa device at browser na ginagamit ng user. Dahil dito, puwedeng mapunta sa taas ng screen sa mobile layout ang mga button na nasa baba ng screen sa desktop layout. Pero hindi ganito ang siste ng mga screen reader. Dahil hindi umaasa ang screen readers sa visual layout ng isang user interface, binabasa nito ang content mo ayon sa pagkakasunod-sunod sa structure nito sa HTML.

Kaya sa halip na sabihing:

- <q lang="en">Click the OK button <mark>below</mark> to continue.</q>
- (Sa isang link na magdadala sa iyo sa taas ng page): <q lang="en">Go to <mark>top</mark></q>

Mas magandang sabihing:

- <q lang="en">Next, select OK to continue</q>
- <q lang="en">Go to beginning</q>

## Sundan ang writing mode

Ang <dfn>writing mode</dfn> ay ang direksyon ng pagsulat. Sa Filipino at English, ito ay left-to-right, top-to-bottom. Kapag gumagawa ka ng user interfaces, mahalagang isaisip na para sa karamihan ng screen readers, ang order ng information ay left-to-right, top-to-bottom. Halimbawa, pansinin ang sumusunod na mock-up ng isang password input.

<figure>
    <img
        style="border: 1px solid #0003"
        sizes="(max-width: 850px) 100vw, 850px"
        srcset="
            /assets/images/posts/accessible-writing/Password_Input_with_hints_vqihg9_c_scale,w_300.png 300w,
            /assets/images/posts/accessible-writing/Password_Input_with_hints_vqihg9_c_scale,w_850.png 850w"
        src="/assets/images/posts/accessible-writing/Password_Input_with_hints_vqihg9_c_scale,w_850.png"
        alt="Password input. Sa ibaba ng password input ay may hint tungkol sa effective na password. Ayon sa hint, dapat daw na may at least isa itong number o symbol, may lowercase at uppercase letters, at 8 characters o higit pa.">
</figure>

Para sa mga users na may maayos na paningin, effective ang pagkakalagay ng hints sa password na ito. At ito na ang pattern na madalas nating makita sa mga websites; palaging nasa baba ng password input ang mga hint para maging valid ang password. Pero isipin natin kung ano ang maririnig ng isang user na gumagamit ng screen reader. Dahil top-to-bottom ang parsing na ginagawa ng screen readers, mauuna nilang ma-encounter ang password input bago ang hints. Kung magiging invalid ang password kapag hindi nasunod ang lahat ng conditions sa hint, baka malito ang user ng screen reader dahil hindi pa naman niya alam na may mga conditions pala. 

Kaya ano ang mas magandang gawin? Ayon kina Metts at Wefle, mas maganda kung ilalagay ang hints *bago* ang password input para malaman kaagad ng user ang tungkol sa hints. Tandaan na kailangan lang ito sa HTML markup, kaya kung kinakailangang nasa baba ito ng password input para sa visual layout mo, puwede mong baguhin ang *visual* layout nito gamit ang CSS grid.[^2]

## Huwag umasa sa kulay at icons
Tandaan na <em>pantulong</em> lang ang mga kulay at icons. Hindi tayo dapat umasa rito para i-convey ang meaning ng mga actions para sa users. Halimbawa, kapag nakakita ka ng warning sa isang user interface na nakapula, maiintindihan mo agad na delikado o <i lang="en">danger</i> ang ibig sabihin nito. Pero gaya siguro ng alam n'yo na, iba ang kahulugan ng kulay pula[^3] sa ibang cultures. Isa pa, tandaan na may mga taong color blind. Para sa kanila, hindi reliable ang kulay bilang indicator ng meaning dahil may mga kulay silang hindi nakikita. 

At hindi rin lahat ng tao ay pamilyar sa mga icon na ginagamit natin sa mga user interface element natin. Naaalala pa ba ninyo ang panahon bago ang iPhone? Wala pang gumagamit ng hamburger menu icon noon, kaya nang nauso ang responsive web design, naging problema para sa mga mobile user ang malaman kung nasaan ang ibang menu options dahil nakatago ito sa likod ng isang icon na hindi pa nila nae-encounter before. Ngayon, pamilyar na ang karamihan sa iba't ibang icons na ginagamit natin para sa mga menu. Pero kumusta ang ibang icons? Tandaan na may mga users na hindi maiintindihan ang iba sa mga icons na ginagamit natin. Kaya mahalaga na **magbigay ng context at higit pang detalye** sa mga user interface natin.

<figure>
    <img
        sizes="(max-width: 1920px) 100vw, 1920px"
        srcset="
            /assets/images/posts/accessible-writing/Menus_1_zv9zxd_c_scale,w_300.png 300w,
            /assets/images/posts/accessible-writing/Menus_1_zv9zxd_c_scale,w_1920.png 1920w"
        src="/assets/images/posts/accessible-writing/Menus_1_zv9zxd_c_scale,w_1920.png"
        alt="Iba't ibang uri ng menu">
    <figcaption>Mula sa hamburger menu icon, nagkaroon na rin tayo ng iba't ibang uri ng menu icons. Alam mo bang ito ang tawag sa kanilang lahat? Hindi? Kumusta ang users ng website mo? Mahalaga na bukod sa kulay at icons, dapat may label din para sa context at details.</figcaption>
</figure>

## I-describe ang action, hindi ang behavior
Tandaan na iba-iba ang devices na ginagamit ng users para i-access ang websites at web apps natin. Sa halip na gumamit ng mga device-specific na terms gaya ng "Click", "Tap", "Press", o "See" (dahil hindi lahat ng users ay nakakakita), mas maganda kung ide-describe natin ang *behavior* na kailangang gawin ng user. Kasama rito ang mga salitang gaya ng "Choose", "Select", o "View".

Siyempre, may mga exceptions din sa guideline na ito. Halimbawa, hindi puwedeng palitan ang "Pinch to zoom" kahit na puwede lang itong gawin sa mga touchscreen device dahil dito umiikot ang buong functionality ng feature na iyon. Pero generally speaking, magiging mas simple ang text ng site mo kung susundin mo ang guideline na ito.

## Further reading

- [Standards for Writing Accessibly](https://alistapart.com/article/standards-for-writing-accessibly/) - Michael J. Metts, Andy Welfle
- [How to Meet WCAG (Quickref Reference)](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-meaning-supplements)

*[WCAG]: Web Content Accessibility Guidelines

[^1]: Ang post na ito ay excerpt mula sa aklat na <cite>[Writing is Designing](https://rosenfeldmedia.com/books/writing-is-designing/)</cite> nina Michael J. Metts at Andy Welfle.
[^2]: Puwede ring gamitin ang Flexbox para dito. Puwede nating gamitin ang [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order) property sa mga flex item para baguhin ang pagkakasunod-sunod nila sa visual layout. Tandaan lang na may [mga problema](https://developer.mozilla.org/en-US/docs/Web/CSS/order#accessibility_concerns) rin sa approach na ito.
[^3]: Sa kulturang chinese, suwerte ang kulay pula. Sa ilang mga bansa sa eastern Europe, kakabit ng kulay pula ang Komunismo. Sa India naman, kinakatawan ng kulay pula ang <i lang="en">purity</i>.