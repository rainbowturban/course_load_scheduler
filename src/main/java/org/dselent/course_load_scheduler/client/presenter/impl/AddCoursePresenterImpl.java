package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.SendGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.action.SendNewCourseAction;
import org.dselent.course_load_scheduler.client.event.LoadAddCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.SendNewCourseEvent;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.presenter.AddCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AddCourseView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.inject.Inject;

public class AddCoursePresenterImpl extends BasePresenterImpl implements AddCoursePresenter{
	//implementations of the helpful functions from the interface
	
	private IndexPresenter parentPresenter;
	private AddCourseView view;
	
	@Inject
	public AddCoursePresenterImpl(IndexPresenter parentPresenter, AddCourseView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		//fill the dropdown box
		//fillFrequencies();
		
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		//implement any event listeners down here
		registration = eventBus.addHandler(LoadAddCourseEvent.TYPE, this);
		eventBusRegistration.put(LoadAddCourseEvent.TYPE, registration);
		eventBusRegistration.put(ReceiveGetFrequenciesEvent.TYPE, eventBus.addHandler(ReceiveGetFrequenciesEvent.TYPE, this));
	}
	
	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}
	
	@Override
	public void onLoadAddCourse(LoadAddCourseEvent evt) {
		retrieveFrequencies();
		this.go(parentPresenter.getView().getViewRootPanel());
	}
	
	

	//returns the view for the presenter
	@Override
	public AddCourseView getView() {
		return view;
	}
	
	//parent info
	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}
	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}
	
	@Override
	public void retrieveFrequencies() {
		//Sends event to DB to fetch frequencies
		eventBus.fireEvent(new SendGetFrequenciesEvent(new SendGetFrequenciesAction()));
		
		//**In place of that being completed, sample values are used
		/*List<Frequency> freqs = new ArrayList<Frequency>();
		
		Frequency f1 = new Frequency();
		f1.setFrequency("1 per year");
		f1.setId(1);
		
		Frequency f2 = new Frequency();
		f2.setFrequency("2 per year");
		f2.setId(2);
		
		Frequency f3 = new Frequency();
		f3.setFrequency("4 per year");
		f3.setId(4);
		
		freqs.add(f1);
		freqs.add(f2);
		freqs.add(f3);
		
		
		return freqs;*/
	}
	
	
	@Override//*****************************************************************************
	public void onReceiveGetFrequencies(ReceiveGetFrequenciesEvent evt) {
		fillFrequencies(evt.getAction().getSections());
	}
	
	//gets the frequencies from the database and fills the dropdown with them. 
	@Override
	public void fillFrequencies(List<Frequency> freqs) {
		ListBox box = view.getFrequencyDropdown();
		box.clear();
		Iterator<Frequency> iterator = freqs.iterator();
		
		
		while(iterator.hasNext()) {
			Frequency f = iterator.next();
			//add to frequency dropdown
			box.addItem(f.getFrequency(), Integer.toString(f.getId()));
		}
		
		view.setFrequencyDropdown(box);
	}
	
	@Override
	public void submitNewCourse() {
		int fIndex = view.getFrequencyDropdown().getSelectedIndex();
		
		if((fIndex >= 0) && (view.getCourseNameField().getText().length() > 0) && (view.getCourseNumberField().getText().length() > 0)) {
			//since index is valid, fill out object
			Courses newCourse = new Courses();
			newCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(fIndex)));
			newCourse.setTitle(view.getCourseNameField().getText());
			newCourse.setNumber(view.getCourseNumberField().getText());
			
			//creates event, which is currently not handled
			SendNewCourseAction action = new SendNewCourseAction();
			action.setCourse(newCourse);
			
			SendNewCourseEvent evt = new SendNewCourseEvent(action);
			eventBus.fireEvent(evt);//to be handled by the Database
			
			returnToViewCourses();//returns if course adding was successful or not
		}
		else {//Frequency was not selected
			Window.alert("A Freqeuncy must be selected to create a course, and textFields cannot be empty.");
		}
	}
	
	
	@Override
	public void returnToViewCourses() {
		//first, clear the text in the textFields
		view.getCourseNameField().setText("");
		view.getCourseNumberField().setText("");

		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(true)));
	}
	
}
