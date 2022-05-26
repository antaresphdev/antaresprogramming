---
title: Bakit mahirap ang CSS?
description: Maraming developers na nadadalian sa ibang programming language pero nahihirapan sa CSS. Isa-isahin natin ang mga posibleng dahilan at kung ano ang mga tips na puwedeng makatulong.
author: teacherbuknoy
image: /assets/images/posts/bakit-mahirap-css/cover.jpg
seo_image:
  og: /assets/images/posts/min-max-clamp/fb_image.png
  twitter: /assets/images/posts/min-max-clamp/twitter_image.png
tags: 
  - css
eleventyExcludeFromCollections: true
---

Para sa maraming developers, mahirap ang CSS. At nakikita ko kung bakit, pero dapat din nating i-acknowledge na hindi ito mas mahirap kumpara sa ibang programming languages. Naka-focus ang CSS sa isang domain ng mga problems na hindi nakasanayan ng maraming developers na sanay sa mga general-purpose programming language gaya ng JavaScript. Para sa kanila, limitado at nakakalito ang CSS. Isa-isahin natin ang mga rason kung bakit at tingnan natin kung paano natin ito mapapadali.

## Ang nakasanayan natin

Para sa isang developer na nakagamit na ng ilang programming languages para gumawa ng apps para sa desktop o mobile device, sanay sila sa similarities ng mga nagamit na nilang language. Procedural ang mga language na gaya ng JavaScript, Kotlin, at C#; dinedetalye nila kung *paano* gagawin ng computer ang gusto nilang gawin. Sanay tayo na nagbibigay ng isang series ng mga steps para makuha ang end result na gusto natin.

Declarative ang CSS. Ibig sabhin, hindi ito kagaya ng kahit anong nakasanayan natin. Sa halip na i-describe in detail kung paano gagawing kulay blue ang isang container, sinasabi lang natin sa browser na gusto natin iyon na maging kulay blue. At sa halip na sabihin sa browser kung paano ia-adjust ang font size kasabay ng pagre-resize ng viewport width at i-calculate lahat ng sizes gamit ang sarili nating math operations, sinasabi lang natin sa browser na gusto natin ng flexible na font size. Sa mga declarative languages na gaya ng CSS, *dine-declare* lang natin ang goal natin. Sinasabi natin sa browser kung ano ang gusto nating mangyari, at ang browser na ang bahala kung paano niya ito gagawin.

Para sa isang developer na nasanay na sa ilang taon ng paggamit ng procedural o object-oriented programming languages, nakakalito ito at mahirap makasanayan. Binabago nito ang mga expectation natin sa kung ano ang mga programming language at kung paano sila dapat gumagana. Kaya rin maraming mga discussions online kung saan pinag-uusapan kung programming language ba talagang matatawag ang CSS (at HTML). Personally, naniniwala ako na programming language ang CSS at HTML on the sole basis na ginagamit sila para i-program ang visuals ng isang website, pero hindi naman ganoon kahalaga iyon as long as nagagawa natin ang trabaho natin. Madaling sisihin ang CSS dahil hindi ito tipikal, kaysa tanggapin na hindi tayo sanay at nahihirapan tayo.

Sa totoo lang, mahirap matutuhan ang lahat ng programming languages. Kung sanay ka sa JavaScript, siguro maiisip mo <q>Mas madali ang JavaScript kumpara sa CSS.</q> At walang problema roon. Pero kung kabaligtaran ang nangyari at mas nauna mong natutuhan ang CSS, sasabihin mo rin na mas madali ito kumpara sa JavaScript. Kagayang-kagaya ito ng mga wika na sinasalita natin. Kapag lumaki kang nagsasalita ng Filipino, gamay na gamay mo ito pero mahihirapan kang mag-aral ng ibang wika; aabutin ka nang ilang taon. Nasanay na kasi tayo sa vocabulary, grammar, at construction ng mga sentences sa wika natin kaya mahirap gibain lahat iyon para mag-aral ng ibang wika.

## Komplikadong problema, komplikado rin ang solusyon

Malawak ang sakop na problema ng CSS. Bukod sa basic visual styling, trabaho rin nito na i-adapt ang layout sa iba't ibang device, viewport sizes, color space, at mga katulad nito. Kasama rin dito ang pag-adapt sa mga user preference gaya ng animations at color themes. Kailangan din ng CSS na magbigay ng fallback para sa mga times na hindi naglo-load ang fonts, o kapag luma ang browser at may mga feature ito na hindi kilala. Kapag may dalawa o higit pang stylesheets ang isang webpage, trabaho rin ng CSS na i-resolve ang conflicts sa pagitan ng mga stylesheets na ito. Bukod diyan, hindi lang sa browser ginagamit ang CSS; ginagamit din ang CSS sa pagle-layout ng mga print publication, pati na sa mga electronic publication formats. Kung komplikado ang mga problema, natural lang na komplikado rin ang solusyon na ino-offer ng CSS.

At hindi problema kung aaminin natin na komplikado ang CSS. Hindi ito madali. Pero ganito rin kakomplikado ang ibang programming languages. Halimbawa, sa JavaScript pa lang, may malaki nang pagkakaiba sa pagitan ng `==` at `===`, `undefined` at `null`, `var`, `let`, at `const`. At ilan pa lamang ito sa mga komplikasyon ng JavaScript; hindi pa kasama rito ang mga asynchronous function, iterators at generators, network requests, web components, at iba pa. Kaya oo, mahirap ang CSS. Pero ang punto rito ay kung kaya mong gumamit ng ibang programming language, kaya mo ring ma-master ang CSS.

