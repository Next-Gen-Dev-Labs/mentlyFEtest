import Link from 'next/link';
import { ArrowLongRightIcon, PhoneIcon } from '@heroicons/react/24/outline';




function LinkText({url, className, text}) {
	return (
		<Link href={url} className={className}> {text}
			<ArrowLongRightIcon className="down rh45"/>
		</Link>
	)
}

function Phone({tel}) {
	return (
		<Link href={"tel:"+tel}>
			<PhoneIcon className="down rh45"/> {tel} <ArrowLongRightIcon className="down rh45"/>
		</Link>
	)
}

function Button({url, className, text}) {
	return (
		<Link href={url} >
			<button className={className + ' text-xl px-10 py-3 rounded-xl bg-blue text-white hover:bg-green'}> {text} </button>  
		</Link>
	)
}
function BigButton({url, className, text}) {
	return (
		<Link href={url} >
			<button className={className + ' text-xl font-bold px-50 py-5 rounded-xl hover:bg-white hover:text-black'}> {text} </button>  
		</Link>
	)
}

export { Phone, LinkText, Button, BigButton }