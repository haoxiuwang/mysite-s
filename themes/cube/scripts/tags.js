hexo.extend.tag.register("twopics", function(args, content){

  var content=`
  <div class="carousel carousel-big-controls gallery-1 my-5 aos-init aos-animate" data-aos="fade-up">
                <div data-carousel='{"mouseDrag": true, "gutter": 48, "loop": true, "items": 1, "nav": false}'>
                  <div>
                    <figure class="media equal equal-16-10"
                      data-bp='{"imgSrc": "${args[0]}" , "parentGalleryClass": "gallery-1" }' >
                      <span  style="background-image: url('${args[0]}')">
                      </span>
                    </figure>                </div>

                  <div>
                    <figure class="media equal equal-16-10"
                      data-bp='{"imgSrc": "${args[1]}" , "parentGalleryClass": "gallery-1" }' >
                      <span  style="background-image: url('${args[1]}')">
                      </span>
                    </figure>                </div>


                </div>
              </div>
  `

return content;

});

hexo.extend.tag.register('myalert',function (args) {

  var content = `
  <div class="card bg-opaque-white aos-init aos-animate" data-aos="fade-up">
                <div class="card-body bg-white">
                  <div class="alert ${args[0]}" role="alert">
                    ${args[1]}
                  </div>
                </div>
              </div>
  `
  return content
});




function child() {
  var args = arguments;

  var content = `
<div>
  <a href="" class="card equal-16-10 card-hover-gradient ">
                <div class="card-wrap">
                  <div class="card-footer my-auto">
                    <div class="text-center text-white text-shadow">
                      <h5 class="mb-0 fw-bold ">${args[1]}</h5>
  <span>${args[0]}</span>
                    </div>
                  </div>
                </div>
                <figure class="background" style="background-image: url('${args[2]}')"></figure>
              </a>
</div>
  `;

  return content
}
hexo.extend.tag.register("swiper",function (args) {

    var content = '';
    for (var i = 0; i < args.length/4; i++) {

      content += child(args[i*4],args[i*4+1],args[i*4+2]);
    }

    return `
    <div class="carousel carousel-big-controls gallery-1 my-5 aos-init aos-animate" data-aos="fade-up">
                  <div data-carousel='{"mouseDrag": true, "gutter": 48, "loop": true, "items": 1, "nav": false}'>

                    ${content}

                  </div>
                </div>
    `;
})


hexo.extend.tag.register("shares",function (args) {
  var content = `
  <div class="row text-center">
          <div class="col-md-3 col-sm-12">
            <span class="eyebrow text-muted mb-1">${args[0]}</span>
            <span class="d-block fs-5">${args[1]}</span>
          </div>
          <div class="col-md-3 col-sm-12">
            <span class="eyebrow text-muted mb-1">${args[2]}</span>
            <span class="d-block fs-5">${args[3]}</span>
          </div>
          <div class="col-md-3 col-sm-12">
            <span class="eyebrow text-muted mb-1">${args[4]}</span>
            <span class="d-block fs-5">${args[5]}</span>
          </div>
          <div class="col-md-3 col-sm-12">
            <span class="eyebrow text-muted mb-1">${args[6]}</span>
            <span class="d-block fs-5">${args[7]}</span>
          </div>
        </div>
  `;
  return content;
})

hexo.extend.tag.register('shares1',function (args) {
    return `

    <div class="row">
        <div class="col">
          <span class="d-block display-3 fw-bold">${args[1]}</span>
          <span class="lead text-secondary">${args[0]}</span>
        </div>
        <div class="col">
          <span class="d-block display-3 fw-bold">${args[3]}</span>
          <span class="lead text-secondary">${args[2]}</span>
        </div>
        <div class="col">
          <span class="d-block display-3 fw-bold">${args[5]}</span>
          <span class="lead text-secondary">${args[4]}</span>
        </div>
        <div class="col">
          <span class="d-block display-3 fw-bold">${args[7]}</span>
          <span class="lead text-secondary">${args[6]}</span>
        </div>
      </div>
    `;
})

hexo.extend.tag.register('twocol',function (args) {

  function col(isfirst) {
    var num = args.length/2;
    var s = isfirst?0:num;
    var e = isfirst?num:args.length;
    var content = '';

      for (var i=s; i < e; i++) {
        content += `
        <div class="list-group-item d-flex align-items-center mb-1">
          <div class="icon-box icon-box-sm bg-opaque-green rounded-circle me-2"><i class="bi bi-check2 text-green"></i>
          </div>
          ${args[i]}
        </div>
         `;
        }
        return content;
  }
  return  `
  <div class="col-md-12 mt-5 ml-5">
        <div class="row g-2">
          <div class="col-md-6">
            <div class="list-group list-group-minimal">
              ${col(1)}
            </div>
          </div>
          <div class="col-md-6">
            <div class="list-group list-group-minimal">
              ${col(0)}
            </div>
          </div>
        </div>
      </div>
  `;
})

hexo.extend.tag.register('mylist',function (args) {

  var content = "";

  for (var i = 0; i < args.length/2; i++) {

    content += `
    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-steps-${i+1}">
                          <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-steps-${i+1}" aria-expanded="false" aria-controls="collapse-steps-${i+1}">
                            ${args[i*2]}
                          </button>
                        </h2>
                        <div id="collapse-steps-${i+1}" class="accordion-collapse collapse" aria-labelledby="heading-steps-${i+1}"
                          data-bs-parent="#accordion-steps">
                          <div class="accordion-body">
                            <p class="text-secondary">${args[i*2+1]}</p>
                          </div>
                        </div>
                      </div>
    `;

  }


  return `

  <div class="card bg-opaque-white">
                 <div class="card-body bg-white">
                   <div class="accordion accordion-steps" id="accordion-steps">
        ${content}

      </div>
    </div>
  </div>


  `;


})

hexo.extend.tag.register('shares2',function (args) {

return `

<div class="row mb-10 justify-content-left">
        <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up">
          <div class="row separated">
            <div class="col-lg-7 p-5">
              <div class="d-flex align-items-end">
                <h5 class="fs-3 mb-0 me-2 lh-1 text-primary fw-bold">${args[0]}</h5>
                <p class="text-secondary">${args[1]}</p>
              </div>
            </div>
            <div class="col-lg-5 p-5">
              <div class="d-flex align-items-end">
                <h5 class="fs-3 mb-0 me-2 lh-1 text-primary fw-bold">${args[2]}</h5>
                <p class="text-secondary">${args[3]}</p>
              </div>
            </div>
            <div class="col-lg-5 p-5">
              <div class="d-flex align-items-end">
                <h5 class="fs-3 mb-0 me-2 lh-1 text-primary fw-bold">${args[4]}</h5>
                <p class="text-secondary">${args[5]}</p>
              </div>
            </div>
            <div class="col-lg-7 p-5">
              <div class="d-flex align-items-end">
                <h5 class="fs-3 mb-0 me-2 lh-1 text-primary fw-bold">${args[6]}</h5>
                <p class="text-secondary">${args[7]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

`

})

hexo.extend.tag.register('mytitle',function (args) {
  return `

  <div class="row mt-5 mb-10 align-items-end aos-init aos-animate" data-aos="fade-up">
      <div class="col-lg-8">
        <h3 class="fw-light"><span class="fw-bold">${args[0]}，</span>${args[1]}。</h3>
      </div>
    </div>

  `
})
