import React from "react";
import icon_other from "./../../assets/img/icon_other.svg";
import icon_recommand from "./../../assets/img/icon_recommand.svg";

const Title = ({ categorys }) => {
	return (
		<div className="title_container">
			{!categorys ? (
				<div className="title_container_inner">
					<span className="other">
						<img src={icon_other} alt="추천 아이콘" />
						OTHER VIDEOS
					</span>
					{/* <p className="sub_title">추천하는 영상이에요!</p> */}
				</div>
			) : (
				<div className="title_container_inner">
					<img src={icon_recommand} alt="추천 아이콘" />
					<h2 className="title">{categorys}의 결과</h2>
					<p className="sub_title">{categorys}채널 검색 결과에요!</p>
				</div>
			)}
		</div>
	);
};

export default Title;
