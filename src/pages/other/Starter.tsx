import { Swiper as Swiperjs, SwiperSlide } from 'swiper/react'

import { Autoplay, EffectCreative, EffectFade, EffectFlip, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules'

// components
import { FormInput, PageBreadcrumb } from '../../components'

// images
import picture1 from '@/assets/images/small/small-1.jpg'
import picture2 from '@/assets/images/small/small-2.jpg'
import picture3 from '@/assets/images/small/small-3.jpg'
import picture4 from '@/assets/images/small/small-4.jpg'
import picture5 from '@/assets/images/small/small-5.jpg'
import picture6 from '@/assets/images/small/small-6.jpg'
import picture7 from '@/assets/images/small/small-7.jpg'

// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-creative'
import 'swiper/css/effect-flip'

const pagination = {
	clickable: true,
	renderBullet: function (index: number, className: string) {
		return '<span class="' + className + '">' + (index + 1) + '</span>'
	},
}

const SwiperPage = () => {
	return (
		<>
			<PageBreadcrumb title="Starter Page" subName="Pages" />
			<div className="card grid xl:grid-cols-2 md:grid-cols-2">
					<div>
						<Swiperjs className="navigation-swiper" loop={true} navigation={true} autoplay={{ delay: 2000 }} pagination={{ type: 'bullets' }} modules={[Pagination, Autoplay, Navigation]}>
							<SwiperSlide>
								<img src="https://technext.github.io/eiser/img/product/single-product/s-product-1.jpg" alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="https://technext.github.io/eiser/img/product/single-product/s-product-1.jpg" alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="https://technext.github.io/eiser/img/product/single-product/s-product-1.jpg" alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="https://technext.github.io/eiser/img/product/single-product/s-product-1.jpg" alt="" />
							</SwiperSlide>
						</Swiperjs>
					</div>
					<div className='flex justify-center'>
						<h2 className='card-title'>Product name</h2>
						<p>25000000</p>
						<h4>Loại: </h4>
						<FormInput label="Size" name="select" type="select" className="form-select" labelClassName="mb-2">
							<option defaultValue="selected"></option>
							<option>M</option>
							<option>S</option>
							<option>L</option>
							<option>XL</option>
							<option>XXL</option>
						</FormInput>
						<FormInput label="Loại sản phẩm" name="select" type="select" className="form-select" labelClassName="mb-2">
							<option defaultValue="selected"></option>
							<option>Chữ thêu đen</option>
							<option>Chữ thêu hồng</option>
							<option>Chữ thêu tím</option>
							<option>Chữ in nổi</option>
							<option>Chữ in chìm</option>
						</FormInput>
					</div>

			</div>
		</>
	)
}

export default SwiperPage 
