import { getCookie } from '@/utils/cookie';
import { SectionTitle } from '..';
import { USER_STATE } from '@/constant';
import { Spacing } from '@/components/common/Spacing';

export function Profile() {
    const { data: profileData } = getCookie(USER_STATE) ?? { data: null };

    return (
        <div className="flex flex-col items-start">
            <SectionTitle>프로필</SectionTitle>
            <Spacing direction="vertical" size={19} />
            <div className="felx flex-col py-5 px-6 border border-[#E5E5E5] rounded-lg w-[25rem] items-center justify-center shadow-sm">
                <div className="flex">
                    <div className="w-[5.25rem] h-[5.25rem] overflow-clip rounded-full flex justify-center items-center">
                        <img src={profileData?.profileImageUrl} alt="" />
                    </div>
                    <div className="flex flex-col gap-[1.2rem]">
                        <div className="pl-5 flex gap-2 items-end h-fit text-uiBlack">
                            <p className="font-semibold text-xl leading-[23.87px]">{profileData?.nickname}</p>
                            <p className="font-[400] text-sm leading-[23.87px]">{profileData?.email}</p>
                        </div>
                        <div className="pl-5 flex gap-2 items-end h-fit text-uiBlack">
                            <p className="font-[400] text-sm leading-[23.87px]">등급</p>
                            <p className="font-semibold text-lg leading-[23.87px]">{profileData?.rank + ' 🌱'}</p>
                        </div>
                    </div>
                </div>
                <hr className="border-[#E5E5E5] mt-5" />
                <Spacing direction="vertical" size={25} />
                <div>정보 수정</div>
            </div>
        </div>
    );
}
