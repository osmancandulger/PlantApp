// SvgIcon.tsx
import React from 'react';
import { ViewStyle } from 'react-native';
import Scanner from '../../../assets/icons/scanner.svg';
import Gauge from '../../../assets/icons/gauge.svg';
import Leaves from '../../../assets/icons/leaves.svg';
import Search from '../../../assets/icons/search.svg';
import Envelope from '../../../assets/icons/envelope.svg';
import ChevronRight from '../../../assets/icons/chevron-right.svg';
interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, width = 24, height = 24, color, style }) => {
  const Icons = {
    scanner: Scanner,
    gauge: Gauge,
    leaves: Leaves,
    search: Search,
    envelope: Envelope,
    chevronRight: ChevronRight,
  } as const;
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent width={width} height={height} fill={color} style={style} />;
};

export default SvgIcon;
