import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Get-Me-A-Chai</h3>
                        <p className="text-sm">Your go-to place for the best chai experience!</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="text-sm hover:text-gray-400">Home</a></li>
                            <li><a href="/about" className="text-sm hover:text-gray-400">About Us</a></li>
                            <li><a href="/contact" className="text-sm hover:text-gray-400">Contact</a></li>
                            <li><a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <p className="text-sm">Email: <a href="mailto:support@getmeachai.com" className="hover:text-gray-400">sammadjawaid465@gmail.com</a></p>
                        <p className="text-sm">Phone: <span className="hover:text-gray-400">(92) 3052237725</span></p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <ul>
                            <li><a href="https://facebook.com" className="text-sm hover:text-gray-400">Facebook</a></li>
                            <li><a href="https://twitter.com" className="text-sm hover:text-gray-400">Twitter</a></li>
                            <li><a href="https://instagram.com" className="text-sm hover:text-gray-400">Instagram</a></li>
                            <li><a href="https://linkedin.com" className="text-sm hover:text-gray-400">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-6">
                    <p className="text-sm">Copyright &copy; {currentYear} Get-Me-A-Chai | All Rights Reserved</p>
                    <p className="text-sm mt-2">
                        Created by <span className="font-bold">Abdul Samad</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
