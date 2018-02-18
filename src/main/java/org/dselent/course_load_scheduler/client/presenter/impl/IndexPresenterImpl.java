package org.dselent.course_load_scheduler.client.presenter.impl;

import javax.inject.Inject;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.IndexView;
import com.google.gwt.dom.client.Style;
import com.google.gwt.user.client.ui.HasWidgets;


public class IndexPresenterImpl extends BasePresenterImpl implements IndexPresenter
{
	private IndexView view;

	@Inject
	public IndexPresenterImpl(IndexView view)
	{
		this.view = view;
		view.setPresenter(this);
	}
	
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public IndexView getView()
	{
		return view;
	}
	
	@Override
	public void showLoadScreen()
	{
		// thank you stackoverflow
		// https://stackoverflow.com/questions/23017908/gwt-set-the-visibility-of-widget-using-css-visibility-property
		view.getLoadingImage().getElement().getStyle().setVisibility(Style.Visibility.VISIBLE);
		view.getGlassLoadingPanel().getElement().getStyle().setVisibility(Style.Visibility.VISIBLE);
	}
	
	@Override
	public void hideLoadScreen()
	{
		view.getLoadingImage().getElement().getStyle().setVisibility(Style.Visibility.HIDDEN);
		view.getGlassLoadingPanel().getElement().getStyle().setVisibility(Style.Visibility.HIDDEN);
	}
}
