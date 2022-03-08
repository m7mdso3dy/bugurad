if (document.querySelector('header section p')) {
    document.querySelector('header section p').innerHTML = 'Discover your weakness before they do';
}




const links = document.querySelectorAll('nav a');
const modalBtn = document.querySelector('.modal-btn');
const event1 = new Event('click');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(this)
        if (this.href.includes('#')) {
            console.log(modalBtn,event1)
            modalBtn.dispatchEvent(event1);
        } else {
            location.replace(this.href)
        }
    });
});

/*nav inserting*/
// const nav = document.querySelector('nav');
// const navInnerHtml = `
// <div class="container">
//             <a class="navbar-brand" href="/">
//                 <img src="imgs/يبب.png" alt="">
//             </a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse sm-md-nav-bar navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li class="nav-item">
//                         <a class="nav-link active" aria-current="page" href="/">Home</a>
//                     </li>
//                     <li class="nav-item dropdown">
//                         <a class="nav-link dropdown-toggle" href="#" id="services" role="button" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             Services
//                         </a>
//                         <ul class="dropdown-menu" aria-labelledby="services">
//                             <li><a class="dropdown-item" href="#">penetrationtesting</a></li>
//                             <li><a class="dropdown-item" href="./sevices/service-1-compil-service-information-sec.html">
//                                     Information Security </a></li>
//                             <li><a class="dropdown-item" href="./sevices/service-7-info-aware.html"> Information Security
//                                     Awareness </a></li>
//                             <li><a class="dropdown-item" href="./sevices/service-2-security-consultancy.html">Security
//                                     Consultancy</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                         <a class="nav-link dropdown-toggle" href="#" id="solutions" role="button" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             Solutions
//                         </a>
//                         <ul class="dropdown-menu" aria-labelledby="solutions">
//                             <li><a class="dropdown-item" href="#">Endpoint Security</a></li>
//                             <li><a class="dropdown-item" href="#"> office 2010 </a></li>
//                             <li><a class="dropdown-item" href="#"> office 2012 </a></li>
    
//                         </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                         <a class="nav-link dropdown-toggle" href="#" id="company" role="button" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             Company
//                         </a>
//                         <ul class="dropdown-menu" aria-labelledby="company">
//                             <li><a class="dropdown-item" href="./About us.html">Who We Are</a></li>
//                             <li><a class="dropdown-item" href="./certifications.html">CERTIFICATIONS</a></li>
//                             <li><a class="dropdown-item" href="./awards2.html">Awards </a></li>
//                             <li><a class="dropdown-item" href="./charity.html">Charity </a></li>
//                             <li><a class="dropdown-item" href="./partener.html">Partnership </a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//             <div class=" navbar lg-nav-bar" id="navbarNav">
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link " aria-current="page" href="/">Home</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link dropdown-toggle" data-target='services-menu'>Services</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link dropdown-toggle" data-target="solutions-menu">Solutions</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link dropdown-toggle" data-target="company-menu">Company</a>
//                     </li>
//                 </ul>
//             </div>
//             <div class="menu menu-1 hide card card-body row flex-column flex-lg-row p-0 " data-menu='services-menu'>
//                 <div class="col-6 pt-4 pb-3 px-3 row justify-content-center">
//                     <div class="d-flex flex-column ">
//                         <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
//                             aria-orientation="vertical">
//                             <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
//                                 aria-selected="true"> <i class="bi bi-badge-tm-fill"></i>Penetration Testing</button>
//                             <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
//                                 aria-selected="false"> <i class="bi bi-badge-tm-fill"></i>Compliance Advisory
//                             </button>
//                             <button class="nav-link" id="v-pills-third-tab" data-bs-toggle="pill" data-bs-target="#v-pills-third" type="button"
//                                 role="tab" aria-controls="v-pills-third" aria-selected="false"> <i class="bi bi-badge-tm-fill"></i>
//                                 Managed Security
//                             </button>
//                             <button class="nav-link" id="v-pills-fourth-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fourth" type="button"
//                                 role="tab" aria-controls="v-pills-fourth" aria-selected="false"> <i class="bi bi-badge-tm-fill"></i>
//                                 Security Awareness
//                             </button>
//                             <button class="nav-link" id="v-pills-fifth-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fifth" type="button"
//                                 role="tab" aria-controls="v-pills-fifth" aria-selected="false"> <i class="bi bi-badge-tm-fill"></i>
//                                 Security Training
//                             </button>
//                             <button class="nav-link" id="v-pills-sixth-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sixth" type="button"
//                                 role="tab" aria-controls="v-pills-sixth" aria-selected="false"> <i class="bi bi-badge-tm-fill"></i>
//                                 Security Outsourcing
//                             </button>
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-6 pt-4 pb-3 " style="font-size: larger;">
//                     <div class="tab-content px-4 " id="v-pills-tabContent">
//                         <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
//                             aria-labelledby="v-pills-home-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="./backup/web-pentesting.html">Web Pentesting</a></li>
//                                 <li><a href="./backup/backup-service-temp.html">Mobile Pentesting</a></li>
//                                 <li><a href="./backup/backup-service-temp.html">Desktop Pentesting</a></li>
//                                 <li><a href="./backup/infrastructer.html">Network Pentesting</a></li>
//                                 <li><a href="#">IoT Pentesting</a></li>
//                                 <li><a href="#">VoIP Pentesting</a></li>
//                                 <li><a href="./backup/source-code-review.html">Source Code Review</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
//                             aria-labelledby="v-pills-profile-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> PCI DSS</a></li>
//                                 <li><a href="#"> PIN SEC</a></li>
//                                 <li><a href="#">HIPAA</a></li>
//                                 <li><a href="#">SOC 1</a></li>
//                                 <li><a href="#">SOC 2</a></li>
//                                 <li><a href="#">SOC 3</a></li>
//                                 <li><a href="#"> ISO 27001</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-third" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> PCI DSS</a></li>
//                                 <li><a href="#"> PIN SEC</a></li>
//                                 <li><a href="#">HIPAA</a></li>
//                                 <li><a href="#">soudy third checkin 1</a></li>
//                                 <li><a href="#">SOC 2</a></li>
//                                 <li><a href="#">SOC 3</a></li>
//                                 <li><a href="#"> ISO 27001</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-fourth" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> PCI DSS</a></li>
//                                 <li><a href="#"> PIN soudy is here</a></li>
//                                 <li><a href="#">HIPAA</a></li>
//                                 <li><a href="#">soudy third checkin 1</a></li>
//                                 <li><a href="#">SOC 2</a></li>
//                                 <li><a href="#">SOC 3</a></li>
//                                 <li><a href="#"> ISO 27001</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-fifth" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> PCI DSS</a></li>
//                                 <li><a href="#"> PIN soudy is here</a></li>
//                                 <li><a href="#">HIPAA</a></li>
//                                 <li><a href="#">soudy third checkin 1</a></li>
//                                 <li><a href="#">SOC 2</a></li>
//                                 <li><a href="#">SOC 3</a></li>
//                                 <li><a href="#"> ISO 27001</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-sixth" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> PCI DSS</a></li>
//                                 <li><a href="#"> PIN soudy is here</a></li>
//                                 <li><a href="#">HIPAA</a></li>
//                                 <li><a href="#">soudy third checkin 1</a></li>
//                                 <li><a href="#">SOC 2</a></li>
//                                 <li><a href="#">SOC 3</a></li>
//                                 <li><a href="#"> ISO 27001</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
    
//             </div>
//             <div class="menu menu-2 hide card card-body row flex-column flex-lg-row p-0" data-menu='solutions-menu'>
//                 <div class="col-6 pt-4 pb-3 px-3 row justify-content-center">
//                     <div class="d-flex flex-column ">
//                         <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
//                             aria-orientation="vertical">
//                             <button class="nav-link active" id="v-pills-erpsystem-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-erpsystem" type="button" role="tab"
//                                 aria-controls="v-pills-erpsystem" aria-selected="true"><i
//                                     class="bi bi-bar-chart-fill"></i>Industries</button>
//                             <button class="nav-link" id="v-pills-office-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-office" type="button" role="tab" aria-controls="v-pills-office"
//                                 aria-selected="false"><i class="bi bi-bar-chart-fill"></i>Security Challenges</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-6 pt-4 pb-3" style="font-size: larger;">
//                     <div class="tab-content px-4 " id="v-pills-tabContent">
//                         <div class="tab-pane fade show active" id="v-pills-erpsystem" role="tabpanel"
//                             aria-labelledby="v-pills-erpsystem-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#">Fintech</a></li>
//                                 <li><a href="#">SaaS</a></li>
//                                 <li><a href="#">Retail</a></li>
//                                 <li><a href="#">Transport</a></li>
//                                 <li><a href="#">Loss Prevention</a></li>
//                                 <li><a href="#">Healthcare</a></li>
//                                 <li><a href="#">Artificial Intelligence</a></li>
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-office" role="tabpanel" aria-labelledby="v-pills-office-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="#"> Email Security</a></li>
//                                 <li><a href="#"> Endpoint Security</a></li>
//                                 <li><a href="#"> Incident Response</a></li>
//                                 <li><a href="#"> Data Loss Prevention</a></li>
//                                 <li><a href="#"> Multi Factor Authentication</a></li>
//                                 <li><a href="#"> Vulnerability Management</a></li>
//                                 <li><a href="#"> Continuous Security</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
    
//             </div>
//             <div class="menu menu-3 hide card card-body row flex-column flex-lg-row p-0" data-menu='company-menu'>
//                 <div class="col-6 pt-4 pb-3 px-3 row justify-content-center">
//                     <div class="d-flex flex-column">
//                         <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
//                             aria-orientation="vertical">
//                             <button class="nav-link active" id="v-pills-about-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-about" type="button" role="tab" aria-controls="v-pills-about"
//                                 aria-selected="true"><i class="bi bi-house-door-fill"></i>About</button>
//                             <button class="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill"
//                                 data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact"
//                                 aria-selected="false"><i class="bi bi-person-lines-fill"></i> Contact US</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-6 pt-4 pb-3" style="font-size: larger;">
//                     <div class="tab-content px-4 " id="v-pills-tabContent">
//                         <div class="tab-pane fade show active" id="v-pills-about" role="tabpanel"
//                             aria-labelledby="v-pills-about-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="./About us.html">Company Overview</a></li>
//                                 <li><a href="./awards2.html">Industry Recognition</a></li>
//                                 <li><a href="./certifications.html">Accreditations</a></li>
//                                 <li><a href="#">Careers</a></li>
    
//                             </ul>
//                         </div>
//                         <div class="tab-pane fade" id="v-pills-contact" role="tabpanel"
//                             aria-labelledby="v-pills-contact-tab">
//                             <ul class="list-unstyled">
//                                 <li><a href="./Contact-us.html">Contact Us</a></li>
//                                 <li><a href="./charity.html">Charities Program </a></li>
//                                 <li><a href="./partener.html">Partners Program</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
    
//             </div>
//             <a href="Contact-us.html" type="button " class="btn btn-danger  lg-contact bg-white text-dark">REQUEST A QUOTE</a>
//         </div>
//         <script src="nav.js"></script>
// `