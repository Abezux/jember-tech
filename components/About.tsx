import Image from "next/image";

export default function About() {
  return (
    <section className="py-section-gap" id="about">
      <div className="max-w-[1280px] mx-auto px-container-margin">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <h2 className="text-headline-lg max-w-xl">The Minds Behind The<br/>Code & Design</h2>
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden hairline-border relative">
              <Image className="object-cover" fill alt="Liquid metal sculpture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCka5rxglVpK8Cu3ah7D8b5d4tXL4QO7rZN3igp6ovmU8tFXTwt_7AIZh8pybjnTnDl6-cbVktO3NCGkJOnnc7lVh612UpBamfzQttPE6ETwPxblx4p0MFSBAcdB_e7RB7V9T-_7uZFy5Qc8nEfIHYoccvXAxFwQJo5UXIRqDJqhQNwxz0TWSKVimW2y8j02X7r2LrEpUWjARqOSGfQVbx18Xc4-EV_Mbq5QFnv1e6VP5D5unU0c9gq"/>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden hairline-border relative">
              <Image className="object-cover" fill alt="Detailed 3D spherical form" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJReFoiqNibM_QeVGKeSaRsntGdR96-uWHml-S3B2ANMHMIO9tzSXjMfi8JIk3bQ1o19XbzGnXCPLcpTNOpy_0_blcJ62r1-bTQZfQWMlq9x5T9ZLFKOvKeA5c3uYsH60zeeEG9pn2Ykwe4d-I4f6oStpIR3xVBHAT-2MyCmaWqCjrXp4tFKuljF93zncMdy60ta4CzrGkzYZXx21_GJ-phRFvXwuSUrWcPOh6xGDvj36gfD1InH9C"/>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden hairline-border relative">
              <Image className="object-cover" fill alt="Swirling mass of obsidian fluid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsl9TJ-eH29ALm8E5Af9PEXxP0AFKhAYdQRk7sYmZpz5x3j0PgZ1pKvCoJPVN2ulq4QWY3TEzuzOmJfjPwFTOCL_iU8z633zT2exOrnTGZRlPojOFWalaryDTBJJf1se0ZLEgpgGIbYiO-ytaud3XJLOI1dVO_ZxE6Xoi435mV7X5UxH6buKyehFTGHjFqCWK232N6ihh5DbfKCvmByjh633qfcIcSMl-5JCJEwuzMSpr5z7ottxmb"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">200+</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">Projects Shipped</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">50+</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">Tech Experts</span>
            </div>
            <div className="flex flex-col">
              <span className="text-display-lg text-5xl mb-2">99%</span>
              <span className="text-on-surface-variant font-label-bold uppercase text-xs tracking-widest">On-Time Delivery</span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-8">
              At አጀብ tech, we believe that technology should be as fluid as it is formidable. Our multidisciplinary team of engineers, designers, and strategists works at the intersection of innovation and security, crafting digital experiences that don't just solve problems—they define new standards of excellence.
            </p>
            <p className="text-[16px] leading-[1.5] text-on-surface-variant/60">
              Founded on the principles of Ethiopian ingenuity and global tech standards, we bridge the gap between complex technical requirements and intuitive user outcomes. Whether it's a decentralized blockchain platform or a streamlined e-commerce hub, we build for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
