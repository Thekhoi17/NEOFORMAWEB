import React from 'react'

export default function Header() {
    return (
        <header class="header p-3">
            <div className="container d-flex justify-content-center align-items-center">
                <img src="./images/logo_1.png" alt="Image" className="custom-img" />
            </div>

            <nav class="navbar text-white navbar-expand-lg">
                <div class="container m-2 mt-5">
                    <a class="navbar-brand" href="#">NEOFORMA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">New Arrival</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop by Category
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Category 1</a></li>
                                    <li><a class="dropdown-item" href="#">Category 2</a></li>
                                    <li><a class="dropdown-item" href="#">Category 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Couch Covers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Beds & Blankets</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Carriers & Travel</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Deals
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Deal 1</a></li>
                                    <li><a class="dropdown-item" href="#">Deal 2</a></li>
                                    <li><a class="dropdown-item" href="#">Deal 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Save Them All®</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FuzzyPedia</a>
                            </li>
                        </ul>
                        <form>
                            <input className="form-control me-2 p-2 m-2" style={{ width: '100px' }} type="search" placeholder="Search" aria-label="Search" />

                        </form>

                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    )
}
