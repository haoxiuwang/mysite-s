hexo.extend.tag.register('swiper2', function(args) {
  var html = `<div class="swiper swiper-button-style-1 mb-100 show-on-scroll" data-swiper-slides="1" data-swiper-speed="600" data-swiper-loop="true" data-swiper-parallax="true" data-show-duration="500">
      <div class="swiper-container">
          <div class="swiper-wrapper">`;

  args.forEach((item, index) => {
    const arr = item.split('#');
    const cdn = hexo.config.jsdelivr.enable ? `https://cdn.jsdelivr.net/gh/${hexo.config.jsdelivr.user}/${hexo.config.jsdelivr.repo}` : ""
    const desc= arr[0],title= arr[1],pic= cdn + arr[2],pic2= cdn + arr[3];
    const slide = `
                <div class="swiper-slide overflow-hidden">
                    <div class="card card-overlay card-blog card-image-sm card-hover-zoom text-center text-white">
                        <div class="card-img" data-swiper-parallax-x="20%" class="swiper-image">
                            <picture>
                                <source media="(max-width: 827.98px)" srcset="${pic2}" />
                                <img class="jarallax-img" src="${pic}"/>
                            </picture>
                            <div class="background-color" style="background-color: rgba(14, 14, 14, .4);"></div>
                        </div>
                        <div class="card-img-overlay">
                            <div class="row justify-content-center align-items-center h-100">
                                <div class="col-sm-12 col-md-7">

                                    <h3 class="card-title h3-sm mt-60">
                                    ${title}
                                    </h2>
                                    <div class="mt-30 mt-lg-60 mt-xl-130 mb-xl-n30">
                                    ${desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    html += slide;
  });

  html += `
      </div>
    </div>
    <div class="swiper-button-prev white-swiper-button"><svg width='26' height='11' viewBox='0 0 26 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M5.5 1L1 5.5L5.5 10' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M19 5.5H1' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
      </svg></div>
    <div class="swiper-button-next white-swiper-button"><svg width='26' height='11' viewBox='0 0 26 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M20.5 1L25 5.5L20.5 10' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M7 5.5H25' stroke='currentColor' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
      </svg></div>
    </div>`
    return html;
});

hexo.extend.tag.register('ul', function(args) {
  var html = '';
  args.forEach((item, i) => {
    html += `<li>${item}</li>`
  });
  return `<ul class="list font-size-18"> ${html} </ul><p/>`;
});

hexo.extend.tag.register('hr', function(args) {
  return `<hr class="mt-30 mb-60">`;
});
