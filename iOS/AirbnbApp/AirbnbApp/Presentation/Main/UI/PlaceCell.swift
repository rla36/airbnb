//
//  TripCell.swift
//  AirbnbApp
//
//  Created by 김지선 on 2021/05/20.
//

import UIKit

class PlaceCell: UICollectionViewCell {
    static let identifier = "PlaceCell"
    
    let locationLabel = UILabel()
    let imageView = RemoteImageView()
    let infoLabel = UILabel()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    func configure(with place: Place){
        locationLabel.text = place.location
        guard let url = URL(string: place.imageURL) else { return }
        imageView.setImage(with: url)
        infoLabel.text = "\(place.type)로 \(place.time)분 거리" // usecase에서 make info
    }
    
    private func configureUI() {
        locationLabel.font = UIFont.boldSystemFont(ofSize: 10)
        infoLabel.font = UIFont.systemFont(ofSize: 8)
        
        let textStack = UIStackView(arrangedSubviews: [locationLabel, infoLabel])
        textStack.axis = .vertical
        textStack.alignment = .center
        textStack.spacing = 4
        
        let itemStack = UIStackView(arrangedSubviews: [imageView, textStack])
        itemStack.axis = .horizontal
        itemStack.alignment = .leading
        itemStack.spacing = 16
        
        contentView.addSubview(itemStack)
        itemStack.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            itemStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 8),
            itemStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: 8),
            itemStack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            itemStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: 8),
        ])
    }
}
