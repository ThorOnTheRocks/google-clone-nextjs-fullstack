import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchResult, { ISearchResult } from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

export default {
  title: 'Utility/SearchResult',
  component: SearchResult,
  argTypes: {},
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchResultProps.base,
} as ISearchResult;
