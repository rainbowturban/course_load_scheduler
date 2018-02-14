package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.StackPanel;

public interface ViewCoursesView extends BaseView<ViewCoursesPresenter>{
	//add functions we need for the view as necessary!
	
	//returns the button used to remove a certain class?
	Button getRemoveCourseButton();
	
	//gets the button used a view a certain class?
	Button getEditCourseButton();
	
	//gets the panel with the courses and info in it
	public StackPanel getCourseList();
	
	//sets panel with courses and info in it.
	public void setCourseList(StackPanel courseList);
	
	
}
