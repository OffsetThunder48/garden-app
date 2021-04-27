import './footer.css'
import { Facebook, Twitter, Pinterest, Instagram } from '@material-ui/icons'

export const Footer = () => {
    return (
        <footer className="color text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <Facebook className="m-1" />
                    <Twitter className="m-1" />
                    <Pinterest className="m-1" />
                    <Instagram className="m-1" />
                </section>
                <section>
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-2">
                                <strong>Sign Up for our Newspaper</strong>
                            </p>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="form-outline form-white form-mb-4">
                                <input type="email" id="form5Example2" class="form-control" />
                                <label class="form-label" for="form5Example2">Email address</label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">Subscribe</button>
                        </div>
                    </div>
                </section>
                <section class="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
                <section class="">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!" class="text-white">Link 1</a></li>
                                <li><a href="#!" class="text-white">Link 2</a></li>
                                <li><a href="#!" class="text-white">Link 3</a></li>
                                <li><a href="#!" class="text-white">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!" class="text-white">Link 1</a></li>
                                <li><a href="#!" class="text-white">Link 2</a></li>
                                <li><a href="#!" class="text-white">Link 3</a></li>
                                <li><a href="#!" class="text-white">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!" class="text-white">Link 1</a></li>
                                <li><a href="#!" class="text-white">Link 2</a></li>
                                <li><a href="#!" class="text-white">Link 3</a></li>
                                <li><a href="#!" class="text-white">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!" class="text-white">Link 1</a></li>
                                <li><a href="#!" class="text-white">Link 2</a></li>
                                <li><a href="#!" class="text-white">Link 3</a></li>
                                <li><a href="#!" class="text-white">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};