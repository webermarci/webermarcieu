import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import App from './App.svelte';

describe('<App>', () => {
    it('renders header', () => {
        const { getByText } = render(App);
        const headerElement = getByText(/Wéber Marci/i);
        expect(document.body.contains(headerElement));
    });
});