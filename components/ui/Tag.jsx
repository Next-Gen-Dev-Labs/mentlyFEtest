const Tag = ({ label, color, flag }) => {
    const getColorClasses = (color) => {
        switch(color) {
            case 'purple':
                return 'bg-[#F3ECF9] border border-[#DDCEEE] text-[#9985A7]';
            case 'teal':
                return 'bg-[#E8FDFB] border border-[#A1BDBA]  text-[#58948E]';
            case 'blue':
                return 'bg-[#E3ECF9] border border-[#ABBEE0]  text-[#8196B5]';
            default:
                return 'bg-[#F4f4f4] border border-[#C8C8C8]  text-[#595564]';
        }
    };

    return (
        <span className={`text-[8px] px-2 py-1 rounded ${getColorClasses(color)}`}>
            {flag ? <div className="flex items-center">
                <img
                    src="/images/flag.svg"
                    alt="Flag"
                    className="h-fit mr-1"
                />
                {label}
            </div> : label  }

    </span>
    );
};


export default Tag;