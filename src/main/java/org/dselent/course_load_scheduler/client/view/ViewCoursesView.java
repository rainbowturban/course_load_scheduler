package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;

import com.google.gwt.user.client.ui.Button;

public interface ViewCoursesView extends BaseView<ViewCoursesPresenter>{
	//add functions we need for the view as necessary!
	
	//returns the button used to remove a certain class?
	Button getRemoveButton();//should take parameter?
	
	//gets the button used a view a certain class?
	Button getViewButton();//should take parameter
	
	public void placeCourses();
	
	
	
	
}
