package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.Grid;

public class GridExample extends Composite {

	private static GridExampleUiBinder uiBinder = GWT.create(GridExampleUiBinder.class);
	@UiField Grid grid;
	@UiField Button button1;
	@UiField Button button2;
	@UiField Button button3;
	@UiField Button button4;
	@UiField Button button5;
	@UiField Button button6;
	@UiField Button button7;
	@UiField Button button8;
	@UiField Button button9;

	interface GridExampleUiBinder extends UiBinder<Widget, GridExample> {
	}

	public GridExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}


}
