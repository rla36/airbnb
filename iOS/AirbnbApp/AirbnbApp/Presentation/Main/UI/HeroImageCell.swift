//
//  HeroImageCell.swift
//  AirbnbApp
//
//  Created by 김지선 on 2021/05/20.
//

import UIKit

class HeroImageCell: UICollectionViewCell {
    static let identifier = "HeroImageCell"
    
    let imageView = RemoteImageView()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    func configureCell(image: String){
        guard let url = URL(string: image) else { return }
        self.imageView.setImage(with: url)
    }
    
    private func configureUI() {
        contentView.heightAnchor.constraint(equalToConstant: 375).isActive = true
    
        contentView.addSubview(imageView)
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.contentMode = .scaleAspectFit
        imageView.layer.masksToBounds = true
        imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor).isActive = true
        imageView.topAnchor.constraint(equalTo: contentView.topAnchor).isActive = true
        imageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor).isActive = true
        imageView.heightAnchor.constraint(equalTo: contentView.heightAnchor).isActive = true
    }
}
