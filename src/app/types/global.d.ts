declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg' {
	import React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
