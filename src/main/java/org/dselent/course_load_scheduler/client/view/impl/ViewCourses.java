package org.dselent.course_load_scheduler.client.view.impl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasWidgets;

import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;

public class ViewCourses extends BaseViewImpl<ViewCoursesPresenter> {

	private static viewCoursesUiBinder uiBinder = GWT.create(viewCoursesUiBinder.class);
	@UiField Label pageTitle;
	@UiField Button addCourse;
	@UiField Button EditViewCourse;
	@UiField Button Remove;
	@UiField Label courseTitle;
	@UiField Grid courseGrid;
	@UiField Button button;

	interface viewCoursesUiBinder extends UiBinder<Widget, ViewCourses> {
	}

	public ViewCourses() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiHandler("EditViewCourse")
	void onButtonClick(ClickEvent event) {
		Window.alert("Did this work???");
	}
	
	@UiHandler("button")
	void onButtonClick_1(ClickEvent event) {
	}

	@Override
	public void setPresenter(ViewCoursesPresenter presenter) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Widget getWidgetContainer() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		// TODO Auto-generated method stub
		return null;
	}
}
