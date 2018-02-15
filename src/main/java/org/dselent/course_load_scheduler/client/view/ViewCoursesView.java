package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.StackPanel;

public interface ViewCoursesView extends BaseView<ViewCoursesPresenter>{
	//add functions we need for the view as necessary!
	
	//returns the buttons
	Button getRemoveCourseButton();
	Button getEditCourseButton();
	Button getAddCourseButton();
	
	//gets/sets the panel with the courses and info in it
	public StackPanel getCourseList();
	public void setCourseList(StackPanel courseList);
}
