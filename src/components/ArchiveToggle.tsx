import React from 'react';

interface ArchiveToggleProps {
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
}

const ArchiveToggle: React.FC<ArchiveToggleProps> = ({ isChecked, onToggle }) => {
    return (
        <div
            onClick={() => onToggle(!isChecked)}
            className={`w-[44px] h-[24px] rounded-full relative cursor-pointer transition-colors duration-300 ${isChecked ? 'bg-[#155B75]' : 'bg-[#D9D9D9]'
                }`}
        >
            <div
                className={`w-[18px] h-[18px] bg-white rounded-full absolute top-[3px] transition-all duration-300 shadow-sm ${isChecked ? 'left-[23px]' : 'left-[3px]'
                    }`}
            />
        </div>
    );
};

export default ArchiveToggle;
