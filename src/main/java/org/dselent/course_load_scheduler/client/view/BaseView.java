package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.BasePresenter;

import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;

public interface BaseView<P extends BasePresenter>
{
	/**
	 * Sets the presenter associated with the view
	 */
	void setPresenter(P presenter);
	
	/**
	 * Returns the class ("this") for the view
	 */
	Widget getWidgetContainer();
	
	/**
	 * Returns the root panel for the given view
	 */
	HasWidgets getViewRootPanel();
}
