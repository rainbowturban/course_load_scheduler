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
import com.google.gwt.user.client.ui.HasWidgets;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.StackPanel;

public class ViewCoursesViewImpl extends BaseViewImpl<ViewCoursesPresenter> implements ViewCoursesView {

	private static viewCoursesUiBinder uiBinder = GWT.create(viewCoursesUiBinder.class);
	@UiField Label pageTitle;
	@UiField Button addCourseButton;
	@UiField HTMLPanel baseContainer;
	@UiField Button editCourseButton;
	@UiField Button removeCourseButton;
	@UiField StackPanel courseList;

	interface viewCoursesUiBinder extends UiBinder<Widget, ViewCoursesViewImpl> {
	}

	public ViewCoursesViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setPresenter(ViewCoursesPresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return baseContainer;
	}

	//setter and getter for the course list panel
	@Override
	public StackPanel getCourseList() {
		return courseList;
	}
	
	@Override
	public void setCourseList(StackPanel courseList) {
		this.courseList = courseList;
	}
	
	//getters for buttons
	@Override
	public Button getRemoveCourseButton() {
		return removeCourseButton;
	}
	@Override
	public Button getEditCourseButton() {
		return editCourseButton;
	}
	@Override
	public Button getAddCourseButton() {
		return addCourseButton;
	}
	
	
	//UI Event handlers
	
	//Moves to the Add Course page
	@UiHandler("addCourseButton")
	void onAddCourseButtonClick(ClickEvent event) {
		presenter.loadAddPage();
	}
	
	//Moves to the View/Edit Course Page
	@UiHandler("editCourseButton")
	void onEditCourseButtonClick(ClickEvent event) {
		int index = courseList.getSelectedIndex();//what is to be removed? get the index.
		if(index >= 0) {//returns -1 when nothing is selected--doesn't break program, but throws exception
			presenter.loadEditPage(index);
		}
	}
	
	@UiHandler("removeCourseButton")
	void onRemoveCourseButtonClick(ClickEvent event) {
		boolean success = presenter.removeCourse(courseList.getSelectedIndex());
		int index = courseList.getSelectedIndex();//what is to be removed? get the index.
		
		//TODO: Send correct Index--for DB not just the clientSide
		
		if(success) {
			courseList.remove(index);
		}
		
	}
	
}
