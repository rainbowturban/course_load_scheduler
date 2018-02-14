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

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import com.google.gwt.user.client.ui.HTMLPanel;

public class ViewCoursesViewImpl extends BaseViewImpl<ViewCoursesPresenter> implements ViewCoursesView {

	private static viewCoursesUiBinder uiBinder = GWT.create(viewCoursesUiBinder.class);
	@UiField Label pageTitle;
	@UiField Button addCourse;
	@UiField Button EditViewCourse;
	@UiField Button Remove;
	@UiField Label courseTitle;
	@UiField Grid courseGrid;
	@UiField HTMLPanel baseContainer;
	@UiField Button EditViewCourse2;

	interface viewCoursesUiBinder extends UiBinder<Widget, ViewCoursesViewImpl> {
	}

	public ViewCoursesViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@UiHandler("EditViewCourse")
	void onButtonClick(ClickEvent event) {
		Window.alert("Did this work already???");
	}

	@Override
	public void setPresenter(ViewCoursesPresenter presenter) {
		// TODO Auto-generated method stub
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		// TODO Auto-generated method stub
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		// TODO Auto-generated method stub
		return baseContainer;
	}
	
	@Override
	public void placeCourses() {
		List<CourseInfo> courses = presenter.retrieveCourses();
	
		//**Turn courses into UI elements and put them in xml???***
		
	}
	
	
	

	@Override
	public Button getRemoveButton() {
		// TODO Auto-generated method stub
		return EditViewCourse;
	}

	@Override
	public Button getViewButton() {
		// TODO Auto-generated method stub
		return Remove;
	}
}
