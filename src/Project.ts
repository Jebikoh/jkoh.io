export default class Project {
  name: string;
  href: string;
  image: string;
  description: string;
  meta: string;
  constructor(props: {
    name: string;
    href: string;
    image: string;
    description: string;
    meta: string;
  }) {
    this.name = props.name;
    this.href = props.href;
    this.image = props.image;
    this.description = props.description;
    this.meta = props.meta;
  }
}
