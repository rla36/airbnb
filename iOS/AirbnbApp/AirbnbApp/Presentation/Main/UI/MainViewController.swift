//
//  MainViewController.swift
//  AirbnbApp
//
//  Created by 김지선 on 2021/05/20.
//

import UIKit

class MainViewController: UIViewController {
    
    private var collectionView: UICollectionView!
    private var viewModel: MainViewModel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel = MainViewModel()
        configureCollectionView()
        //        congigureFetchData()
        
        let searchBarController = UISearchController(searchResultsController: nil)
        searchBarController.searchBar.placeholder = "어디로 여행가세요?"
        searchBarController.hidesNavigationBarDuringPresentation = false
        
        navigationItem.searchController = searchBarController
    }
    
    private func configureCollectionView() {
        let layout = LayoutManager().createLayout()
        collectionView = UICollectionView(frame: view.bounds, collectionViewLayout: layout)
        collectionView.backgroundColor = .systemBackground
        collectionView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.addSubview(collectionView)
    }
    //        let layout = LayoutManager().createLayout()
    
    enum Section: Int, CaseIterable {
        case heroImage
        case place
        case trip
    }

    //enum DataItem: Hashable {
    //    case detailImages(Image)
    //    case info(Detail)
    //    case descriptionImages(Image)
    //}
}


